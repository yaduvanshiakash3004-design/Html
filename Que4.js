const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 },
  { category: "Clothing", amount: 200 }
];
const revenue = sales.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.amount;
  return acc;
}, {});

console.log("Revenue by Category:", revenue);
const result = Object.entries(revenue)
  .filter(([category, total]) => total > 300)
  .map(([category]) => category);


console.log("Categories with Revenue > 300:", result);