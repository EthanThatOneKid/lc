/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function reverseList(head: ListNode | null): ListNode | null {
  return function reverse(
    prev: ListNode | null,
    current: ListNode | null,
  ): ListNode | null {
    if (!current) {
      return prev;
    }

    const next = current.next;
    current.next = prev;
    return reverse(current, next);
  }(null, head);
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
