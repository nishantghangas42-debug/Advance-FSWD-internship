// 1)
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Hello World");
//     }, 2000);
// });

// p1.then(console.log);

// 2)
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Server Down");
//     }, 3000);
// });

// p2.catch(console.error);

// 3)
// const p3 = new Promise((resolve, reject) => {
//     Math.random() > 0.5
//         ? resolve("Success")
//         : reject("Failure");
// });

// p3.then(console.log).catch(console.error);

// 4)
// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         age >= 18
//             ? resolve("Eligible")
//             : reject("Not Eligible");
//     });
// }

// checkAge(20).then(console.log).catch(console.error);

// 5)

// function validatePassword(password) {
//     return new Promise((resolve, reject) => {
//         password.length >= 8
//             ? resolve("Valid Password")
//             : reject("Password Too Short");
//     });
// }

// 6)
// function validateEmail(email) {
//     return new Promise((resolve, reject) => {
//         email.includes("@")
//             ? resolve("Valid Email")
//             : reject("Invalid Email");
//     });
// }

// 7)function withdraw(balance, amount) {
//     return new Promise((resolve, reject) => {
//         amount <= balance
//             ? resolve(`Remaining Balance: ${balance - amount}`)
//             : reject("Insufficient Balance");
//     });
// }

// 8)
// function atm(balance, amount, pinCorrect) {
//     return new Promise((resolve, reject) => {
//         if (!pinCorrect) reject("Wrong PIN");
//         else if (amount > balance) reject("Insufficient Funds");
//         else resolve("Cash Dispensed");
//     });
// }

// 9)
// const userPromise = Promise.resolve({
//     id: 1,
//     name: "Ram",
//     age: 25
// });

// userPromise.then(console.log);

// 10)
// const errorPromise = Promise.reject({
//     code: 500,
//     message: "Internal Server Error"
// });

// errorPromise.catch(console.log);

// 11)

// Promise.resolve(10)
// .then(num => num * 2)
// .then(num => num * 2)
// .then(num => num * 2)
// .then(console.log);

// 12)
// Promise.resolve("Ram")
// .then(name => name.toUpperCase())
// .then(name => name + " MOHAN")
// .then(name => name + " DIXIT")
// .then(console.log);

// 13)
// Promise.resolve(1000)
// .then(price => price + price * 0.18)
// .then(price => price - 100)
// .then(console.log);

// 14)
// Promise.resolve("Login")
// .then(() => "Get User")
// .then(() => "Get Orders")
// .then(() => "Get Payment")
// .then(console.log);

// 15)
// Promise.resolve("Login")
// .then(() => "Select Movie")
// .then(() => "Select Seats")
// .then(() => "Payment")
// .then(() => "Ticket Booked")
// .then(console.log);

// 16)
// Promise.resolve("Browse Menu")
// .then(() => "Add To Cart")
// .then(() => "Place Order")
// .then(() => "Payment")
// .then(() => "Food Delivered")
// .then(console.log);

// 17)
// Promise.resolve("Application")
// .then(() => "Document Verification")
// .then(() => "Entrance Test")
// .then(() => "Fee Payment")
// .then(() => "Admission Confirmed")
// .then(console.log);

// 18)
// Promise.resolve("Search Train")
// .then(() => "Select Seat")
// .then(() => "Payment")
// .then(() => "Ticket Confirmed")
// .then(console.log);

// 19)
// function delay(value) {
//     return new Promise(resolve =>
//         setTimeout(() => resolve(value), 1000)
//     );
// }

// delay("Step1")
// .then(console.log)
// .then(() => delay("Step2"))
// .then(console.log)
// .then(() => delay("Step3"))
// .then(console.log);

// 20)
// let chain = Promise.resolve(0);

// for (let i = 1; i <= 10; i++) {
//     chain = chain.then(num => {
//         console.log(`Then ${i}`);
//         return num + 1;
//     });
// }

// 21)
// Promise.resolve()
// .then(() => {
//     throw new Error("Something Wrong");
// })
// .catch(err => console.log(err.message));

// Q22

// Promise.resolve()
// .then(() => console.log("1"))
// .then(() => console.log("2"))
// .then(() => {
//     throw new Error("Error in 3");
// })
// .then(() => console.log("4"))
// .then(() => console.log("5"))
// .catch(err => console.log(err.message));

// Q23

// Promise.resolve("Step1")
// .then(console.log)
// .then(() => "Step2")
// .then(console.log)
// .then(() => {
//     throw new Error("Error");
// })
// .catch(err => console.log(err.message));


// Q24 Recover
// Promise.resolve()
// .then(() => {
//     throw new Error("Failed");
// })
// .catch(err => {
//     console.log(err.message);
//     return "Recovered";
// })
// .then(console.log);

// Q25 Multiple catches
// Promise.reject("Error")
// .catch(err => {
//     console.log("Catch1");
//     throw err;
// })
// .catch(err => {
//     console.log("Catch2");
// });

// Q26 Greeting
// function greet(name) {
//     return new Promise(resolve => {
//         resolve(`Hello ${name}`);
//     });
// }
// Q27 Calculator
// function add(a, b) {
//     return new Promise(resolve => {
//         resolve(a + b);
//     });
// }
// Q28 Login
// function login(user, pass) {
//     return new Promise((resolve, reject) => {
//         user === "admin" && pass === "123"
//             ? resolve("Login Success")
//             : reject("Login Failed");
//     });
// }
// Q29 File Download
// function downloadFile() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("File Downloaded");
//         }, 2000);
//     });
// }
// Q30 Weather API
// function getWeather(city) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`${city}: 32°C`);
//         }, 1000);
//     });
// }


// Q31

// Promise.all([
//     Promise.resolve("User"),
//     Promise.resolve("Orders"),
//     Promise.resolve("Products")
// ]).then(console.log);

// Q32

// const arr = [1,2,3,4,5].map(i =>
//     new Promise(resolve =>
//         setTimeout(() => resolve(i), i * 1000)
//     )
// );

// Promise.all(arr).then(console.log);

// Q33

// Promise.all([
//     Promise.resolve(1),
//     Promise.reject("Failed"),
//     Promise.resolve(3)
// ])
// .catch(console.log);

// Q34 Dashboard Loader

// Promise.all([
//     fetchUsers(),
//     fetchOrders(),
//     fetchRevenue()
// ]).then(console.log);


// Q35 Parallel Downloader

// Promise.all([
//     downloadFile1(),
//     downloadFile2(),
//     downloadFile3()
// ]).then(console.log)