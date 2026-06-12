const users = [
  { user: "A", actions: ["login", "logout"] },
  { user: "B", actions: ["login", "purchase", "logout"] }
];

const actionCount = {};

users.forEach(user => {
  user.actions.forEach(action => {
    actionCount[action] = (actionCount[action] || 0) + 1;
  });
});

console.log("Action Counts:", actionCount);

let mostCommonAction = "";
let maxCount = 0;

for (let action in actionCount) {
  if (actionCount[action] > maxCount) {
    maxCount = actionCount[action];
    mostCommonAction = action;
  }
}

console.log("Most Common Action:", mostCommonAction);
console.log("Occurrences:", maxCount);