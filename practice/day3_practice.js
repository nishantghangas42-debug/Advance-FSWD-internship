// 1
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

// 2
// console.log(student.name);

// 3
// const student = {
//     name: "Ram",
//     greet: function() {
//         console.log("Hello I am Ram");
//     }
// };

// student.greet();

// 4
// const student = {
//     age: 20,

//     isAdult: function() {
//         if (this.age >= 18) {
//             console.log("Adult");
//         } else {
//             console.log("Not Adult");
//         }
//     }
// };

// student.isAdult();

// 5
// console.log(Object.keys(student));

// 6
// console.log(Object.values(student));

// 7
// console.log("email" in student);
// console.log(student.email !== undefined);
// console.log(Object.hasOwnProperty('email'));


// 8
// student.course = "MERN";

// 9
// delete student.age;



// 10
// const copy = { ...student };

// 11
// const user = {
//     name: "Ram",

//     showName: function() {
//         console.log(this.name);
//     }
// };

// user.showName();

// 12
// const user = {
//     name: "Ram",

//     show: function() {
//         console.log(this.name.toUpperCase());
//     }
// };

// user.show();

// 13
// const account = {
//     balance: 1000,

//     deposit: function(amount) {
//         this.balance += amount;
//     },

//     withdraw: function(amount) {
//         this.balance -= amount;
//     }
// };

// account.deposit(500);
// account.withdraw(200);

// console.log(account.balance);

// 14
// Ram

// 15
// undefined

// 16
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// 17
// const s1 = new Student("Ram", 20);
// const s2 = new Student("Mohan", 21);
// const s3 = new Student("Amit", 22);

// 18
// function Student(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log("Hello " + this.name);
//     };
// }

// 19
// Ram

// 20
// function Car(brand, price) {
//     this.brand = brand;
//     this.price = price;
// }

// const c1 = new Car("BMW", 5000000);

// 21
// function Student(name) {
//     this.name = name;
// }

// Student.prototype.greet = function() {
//     console.log("Hello " + this.name);
// };

// 22
// true

// 23
// Student.prototype.isAdult = function() {
//     return this.age >= 18;
// };

// 24
// Hi

// 25
// Student.prototype.course = "MERN";

// 26
// false

// 27
// true

// 28
// arr
//  ↓
// Array.prototype
//  ↓
// Object.prototype
//  ↓
// null

// 29
// const animal = {
//     eat: function() {
//         console.log("Eating");
//     }
// };

// 30
// const dog = Object.create(animal);

// 31
// dog.bark = function() {
//     console.log("Barking");
// };

// 32
// Eating

// 33
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// 34
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// 35
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     isAdult() {
//         return this.age >= 18;
//     }
// }

// 36
// const s1 = new Student("Ram", 20);
// const s2 = new Student("Mohan", 21);
// const s3 = new Student("Amit", 22);

// 37
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// 38
// class Dog extends Animal {
// }

// 39
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// 40
// const d = new Dog();

// d.eat();
// d.bark();

// Output:
// Eating
// Barking