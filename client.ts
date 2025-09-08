export interface LCQuestion {
  questionId: string;
  questionFrontendId: string;
  title: string;
  titleSlug: string;
  content: string;
  difficulty: string;
  topicTags: { name: string; slug: string }[];
}

export interface LCDailyQuestion {
  date: string;
  link: string;
  question: LCQuestion;
}

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

export class LCClient {
  private cachedSlugMap: Map<string, string> | null = null;
  private cachedRestSlugMap: Map<string, string> | null = null;

  /**
   * Generic helper for GraphQL queries
   */
  private async graphql<T>(
    query: string,
    variables: Record<string, any> = {},
  ): Promise<T> {
    const resp = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    if (!resp.ok) {
      throw new Error(
        `GraphQL request failed: ${resp.status} ${resp.statusText}`,
      );
    }

    const data = await resp.json();
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    return data.data as T;
  }

  /**
   * Builds a cache mapping questionFrontendId → titleSlug
   */
  private async loadSlugMap(): Promise<Map<string, string>> {
    if (this.cachedSlugMap) return this.cachedSlugMap;

    const query = `
        query getAllQuestions($skip: Int!, $limit: Int!) {
          problemsetQuestionList(
            categorySlug: ""
            limit: $limit
            skip: $skip
            filters: {}
          ) {
            questions {
              questionFrontendId
              titleSlug
            }
          }
        }
      `;

    // ⚠️ Pulling 10k at once might be heavy — in practice, you may want pagination
    const data = await this.graphql<{
      problemsetQuestionList: {
        questions: { questionFrontendId: string; titleSlug: string }[];
      };
    }>(query, { skip: 0, limit: 10000 });

    this.cachedSlugMap = new Map(
      data.problemsetQuestionList.questions.map((
        q,
      ) => [q.questionFrontendId, q.titleSlug]),
    );

    return this.cachedSlugMap;
  }

  /**
   * Resolve a titleSlug from a frontend ID using LeetCode's public problems API.
   * This avoids large GraphQL queries and works without authentication.
   */
  private async getTitleSlugByFrontendId(id: number): Promise<string> {
    if (!this.cachedRestSlugMap) {
      const resp = await fetch("https://leetcode.com/api/problems/algorithms/");
      if (!resp.ok) {
        throw new Error(
          `REST problems API failed: ${resp.status} ${resp.statusText}`,
        );
      }
      const data = await resp.json() as any;
      const pairs = (data?.stat_status_pairs ?? []) as any[];
      this.cachedRestSlugMap = new Map(
        pairs
          .filter((p) =>
            p?.stat?.frontend_question_id && p?.stat?.question__title_slug
          )
          .map((
            p,
          ) => [
            String(p.stat.frontend_question_id),
            p.stat.question__title_slug,
          ]),
      );
    }

    const titleSlug = this.cachedRestSlugMap.get(String(id));
    if (!titleSlug) {
      throw new Error(`Question with ID ${id} not found`);
    }
    return titleSlug;
  }

  /**
   * Fetch a question by numeric ID (frontend ID, e.g. 1 → Two Sum)
   */
  async getQuestionById(id: number): Promise<LCQuestion> {
    const titleSlug = await this.getTitleSlugByFrontendId(id);

    const query = `
        query getQuestionDetail($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            questionId
            questionFrontendId
            title
            titleSlug
            content
            difficulty
            topicTags { name slug }
          }
        }
      `;

    const data = await this.graphql<{ question: LCQuestion }>(query, {
      titleSlug,
    });
    return data.question;
  }

  /**
   * Fetch the current daily coding challenge question
   */
  async getDailyQuestion(): Promise<LCDailyQuestion> {
    const query = `
        query getDailyQuestion {
          activeDailyCodingChallengeQuestion {
            date
            link
            question {
              questionId
              questionFrontendId
              title
              titleSlug
              content
              difficulty
              topicTags { name slug }
            }
          }
        }
      `;

    const data = await this.graphql<
      { activeDailyCodingChallengeQuestion: LCDailyQuestion }
    >(query);
    return data.activeDailyCodingChallengeQuestion;
  }
}
