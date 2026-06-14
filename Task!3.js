
const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);

console.log("11.", totalStars);


const items = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const prices = items.map(item => item.price);
const highestPrice = Math.max(...prices);

console.log("12. Prices:", prices);
console.log("12. Highest Price:", highestPrice);



const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);

console.log("13.", squares);


const marks = [45, 80, 60, 90, 30];

const passedMarks = marks.filter(mark => mark > 50);
const avgMarks =
  passedMarks.reduce((sum, mark) => sum + mark, 0) / passedMarks.length;

console.log("14.", avgMarks);

const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];

const totalCartValue = cart.reduce((sum, item) => sum + item.price, 0);

console.log("15.", totalCartValue);



const names = ["john", "emma", "alex"];

const upperNames = names.map(name => name.toUpperCase());

console.log("16.", upperNames);


const nums = [10, 20, 30, 40];

const sum = nums.reduce((total, num) => total + num, 0);

console.log("17.", sum);


const users = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

const adults = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log("18.", adults);


const productsList = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const discountedProducts = productsList.map(product => ({
  ...product,
  price: product.price * 0.9
}));

console.log("19.", discountedProducts);

const result = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passedStudents = result
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log("20.", passedStudents);