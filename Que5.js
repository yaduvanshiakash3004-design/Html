const paragraph =
  "The quick brown fox jumps over the lazy dog. The fox is quick.";
const words = paragraph
  .replace(/[^\w\s]/g, "")
  .toLowerCase()
  .split(/\s+/);

const wordCount = {};

words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

console.log("Word Counts:", wordCount);

const top3 = Object.entries(wordCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

console.log("Top 3 Words:", top3);