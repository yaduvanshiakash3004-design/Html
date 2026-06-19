
const students = [
    {name: "A", marks: 35},
    {name: "B", marks: 75},
    {name: "C", marks: 45},
    {name: "D", marks: 25},
];
const q8 =students.filter(function(mark){
    return mark.marks>40;
}).map(function(name){
    return name.name;
});
const q8arr=students.filter(mark=>mark.marks>40).map(name=>name.name);
console.log(q8);
console.log(q8arr);

//9
const marks1 =[
    80,90,70,60
];
const q9=marks1.reduce(function(total,n){
    return total+=n;
}, 0)/marks1.length;
//10
const fruits =[
    ""
]