// Q1)
// let a = 10; 
 
// function outer() { 
//    let a = 20; 
 
//    function inner() { 
//        console.log(a); 
//    } 
 
//    inner(); 
// } 
 
// outer();

// Answer->20

// Q2)  
// let count = 1; 
 
// function test() { 
//    console.log(count); 
 
//    let count = 2; 
// } 
 
// test();

// Answer-> Cannot access 'count' before initialization

//  Q3)
//  function a(){
//          let x =1;
//         function b(){
//             let y=2;
//             function c(){
//                 let z=3;
//                 function d(){
//                     let s=4;
//                     console.log(x);
//                     console.log(y);
//                     console.log(z);
//                     console.log(s);
                    
//                 }
//                 d();
//             }
//             c();
//         }
//         b();
//     }
//     a();

// Q4)
//        function outer() {
//     let message = "Hello";

//     return function A() {
//         console.log(message);
//     };
// }

// const fn = outer();
// fn();

// Q5)
// undefined

// 6
//         function b(){
//             let y=2;
//             function c(){
//                 let z=3;
//                 function d(){
//                     let s=4;
//                    
//                     console.log(y);
//                     console.log(z);
//                     console.log(s);
                    
//                 }
//                 d();
//             }
//             c();
//         }
//         b();
//     

// 7
// Mohan

// 8
// function one() {
//     let a = 10;

//     function two() {
//         let b = 20;

//         function three() {
//             let c = 30;

//             console.log(a, b, c);
//         }

//         three();
//     }

//     two();
// }

// one();

// 9)
// function parent() {
//     function child() {
//         let x = 10;
//     }

//     child();

//     console.log(x);
// }

// parent();

// Answer -> No

// Q.10)
// function createCounter() {
//     let count = 0;

//     return {
//         increment() {
//             count++;
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// console.log(counter.increment());
// console.log(counter.increment());

// 11
// function counter() {
//     let count = 0;

//     return function() {
//         return ++count;
//     };
// }

// const c = counter();

// console.log(c());
// console.log(c());
// console.log(c());

// 12
// function reverseCounter() {
//     let count = 10;

//     return function() {
//         return count--;
//     };
// }

// const rc = reverseCounter();

// console.log(rc());
// console.log(rc());
// console.log(rc());

// 13
// function bankAccount() {
//     let balance = 0;

//     return {
//         deposit(amount) {
//             balance += amount;
//         },

//         withdraw(amount) {
//             balance -= amount;
//         },

//         checkBalance() {
//             return balance;
//         }
//     };
// }

// const account = bankAccount();

// account.deposit(1000);
// account.withdraw(300);

// console.log(account.checkBalance());

// 14
// function createUser(username) {
//     return function() {
//         console.log(username);
//     };
// }

// const user = createUser("Abhishek");

// user();

// 15
// function loginTracker() {
//     let attempts = 0;

//     return function(success) {
//         if (success) {
//             console.log("Login Successful");
//             attempts = 0;
//         } else {
//             attempts++;

//             if (attempts >= 3) {
//                 console.log("Account Locked");
//             } else {
//                 console.log("Invalid Login");
//             }
//         }
//     };
// }

// const login = loginTracker();

// login(false);
// login(false);
// login(false);

// 16
// function createPassword() {
//     let password = "12345";

//     return {
//         getPassword() {
//             return password;
//         }
//     };
// }

// const obj = createPassword();

// console.log(obj.getPassword());

// 17
// function shoppingCart() {
//     let items = [];

//     return {
//         addItem(item) {
//             items.push(item);
//         },

//         removeItem(item) {
//             items = items.filter(i => i !== item);
//         },

//         showItems() {
//             console.log(items);
//         }
//     };
// }

// 18
// function votingMachine() {
//     let voters = new Set();

//     return function(user) {
//         if (voters.has(user)) {
//             console.log("Already Voted");
//         } else {
//             voters.add(user);
//             console.log("Vote Counted");
//         }
//     };
// }

// 19
// function executionCounter(fn) {
//     let count = 0;

//     return function() {
//         count++;
//         console.log("Executed:", count);

//         return fn();
//     };
// }

// 20
// function expenseTracker() {
//     let expenses = [];

//     return {
//         addExpense(amount) {
//             expenses.push(amount);
//         },

//         getTotal() {
//             return expenses.reduce((a, b) => a + b, 0);
//         }
//     };
// }

// 21
// (function() {
//     console.log("Welcome to JavaScript");
// })();

// 22
// (function(length, width) {
//     console.log(length * width);
// })(10, 5);

// 23
// (() => {
//     console.log("Arrow IIFE");
// })();

// 24
// const counter = (function() {
//     let count = 0;

//     return {
//         increment() {
//             return ++count;
//         }
//     };
// })();

// 25
// const counterModule = (function() {
//     let count = 0;

//     return {
//         increment() {
//             return ++count;
//         },

//         decrement() {
//             return --count;
//         },

//         reset() {
//             count = 0;
//         }
//     };
// })();

// 26
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log(calculate(10, 5, add));

// 27
// function repeat(times, callback) {
//     for (let i = 0; i < times; i++) {
//         callback();
//     }
// }

// function sayHello() {
//     console.log("Hello");
// }

// repeat(5, sayHello);

// 28
// function logger(fn) {
//     return function(...args) {
//         console.log("[INFO]");
//         return fn(...args);
//     };
// }

// const login = logger(() => console.log("User Logged In"));

// login();

// 29
// function timer(fn) {
//     return function(...args) {
//         const start = performance.now();

//         const result = fn(...args);

//         const end = performance.now();

//         console.log(`Execution Time: ${end - start} ms`);

//         return result;
//     };
// }

// 30
// function countCalls(fn) {
//     let count = 0;

//     return function(...args) {
//         count++;

//         console.log("Called:", count);

//         return fn(...args);
//     };
// }

// 31
// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const names = users.map(user => user.name);

// console.log(names);

// 32
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(num => num * num);

// console.log(squares);

// 33
// const products = [
//     { name: "Laptop" },
//     { name: "Mouse" },
//     { name: "Keyboard" }
// ];

// const names = products.map(product => product.name);

// console.log(names);

// 34
// const nums = [1, 2, 3, 4, 5, 6];

// const even = nums.filter(num => num % 2 === 0);

// console.log(even);

// 35
// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const result = users.filter(user => user.age > 25);

// console.log(result);

// 36
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ];

// const expensive = products.filter(product => product.price > 1000);

// console.log(expensive);

// 37
// const arr = [10, 20, 30, 40];

// const total = arr.reduce((sum, num) => sum + num, 0);

// console.log(total);

// 38
// const arr = [5, 12, 3, 45, 2];

// const max = arr.reduce((a, b) => (a > b ? a : b));

// console.log(max);

// 39
// const words = ["JavaScript", "React", "Node"];

// const total = words.reduce((sum, word) => sum + word.length, 0);

// console.log(total);

// 40
// const orders = [
//     {
//         id: 1,
//         amount: 5000,
//         status: "completed"
//     },
//     {
//         id: 2,
//         amount: 2000,
//         status: "pending"
//     },
//     {
//         id: 3,
//         amount: 7000,
//         status: "completed"
//     },
//     {
//         id: 4,
//         amount: 1000,
//         status: "completed"
//     }
// ];

// // 1. Completed Orders
// const completedOrders = orders.filter(
//     order => order.status === "completed"
// );

// // 2. Total Revenue
// const totalRevenue = completedOrders.reduce(
//     (acc, order) => acc + order.amount,
//     0
// );

// // 3. Average Revenue
// const averageRevenue =
//     totalRevenue / completedOrders.length;

// // 4. Highest Order Amount
// const highestOrder = completedOrders.reduce(
//     (max, order) =>
//         order.amount > max ? order.amount : max,
//     0
// );

// // 5. Array of Order IDs
// const orderIds = completedOrders.map(
//     order => order.id
// );

// console.log("Completed Orders:", completedOrders);
// console.log("Total Revenue:", totalRevenue);
// console.log("Average Revenue:", averageRevenue);
// console.log("Highest Order Amount:", highestOrder);
// console.log("Order IDs:", orderIds);