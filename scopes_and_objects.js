// TODO: Create a global variable called globalCount
var globalCount = 0;

// TODO: Create a function that demonstrates local scope
function demonstrateLocalScope() {
    var localCount = 0;
}
console.log(globalCount); 

// TODO: Create a function that tries to modify both variables
function modifyCounts() {
    globalCount++;
}
console.log(globalCount);

// TODO: Create a Student constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}
 

// TODO: Create several student instances
var student1 = new Student("Yag Yag", 19);
var student2 = new Student("Mettas", 22);
var student3 = new Student("Azizi", 34);
 
// TODO: Create an object literal with nested properties
var school = {
    name: "Bosmansdam High School",
    Location: "Cape Town",
    students: [student1, student2, student3],
    staff: {
        teachers: ["Mr. Gys", "Ms. Gys"]
    }
}

console.log(school);