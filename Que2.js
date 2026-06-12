const repositories = [
  { repo: "A", stars: 100, forks: 50 },
  { repo: "B", stars: 200, forks: 80 }
];

// Calculate popularity score
const repoScores = repositories.map(repo => ({
  repo: repo.repo,
  score: repo.stars * 2 + repo.forks
}));

console.log("Repository Scores:", repoScores);

// Find top repository
const topRepo = repoScores.reduce((best, current) =>
  current.score > best.score ? current : best
);

console.log("Top Repository:", topRepo.repo);
console.log("Popularity Score:", topRepo.score);