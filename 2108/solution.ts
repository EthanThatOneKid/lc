// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

function firstPalindrome(words: string[]): string {
  return words.find((w) => w === w.split("").reverse().join("")) ?? "";
}
