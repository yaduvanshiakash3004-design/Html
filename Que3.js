const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];

const result = students
  .map(student => {
    const avg =
      student.marks.reduce((sum, mark) => sum + mark, 0) /
      student.marks.length;

    return { name: student.name, average: avg };
  })
  .filter(student => student.average >= 85)
  .sort((a, b) => b.average - a.average)
  .map(student => student.name);

console.log(result);