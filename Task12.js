const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

const averages = students.map(student => ({
  name: student.name,
  average: student.marks.reduce((a, b) => a + b, 0) / student.marks.length
}));

console.log("1.", averages);



const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);
console.log("2.", totalRevenue);



const text = "The fox is quick. The fox is smart.";

const foxCount = text
  .toLowerCase()
  .split(/\W+/)
  .filter(word => word === "fox").length;

console.log("3.", foxCount);



const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(emp => emp.salary);
const totalSalary = salaries.reduce((a, b) => a + b, 0);

console.log("4. Salaries:", salaries);
console.log("4. Total Salary:", totalSalary);

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 10 }
];

const availableProducts = products
  .filter(product => product.stock > 0)
  .map(product => product.name);

console.log("5.", availableProducts);



const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 }
];

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("6.", totalLikes);


const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const topMovies = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log("7.", topMovies);

const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((sum, c) => sum + c.amount, 0);

console.log("8.", totalSpending);



const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(t => t.type === "credit")
  .reduce((sum, t) => sum + t.amount, 0);

console.log("9.", totalCredit);

const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

const loginCount = actions.filter(a => a.action === "login").length;

console.log("10.", loginCount);


