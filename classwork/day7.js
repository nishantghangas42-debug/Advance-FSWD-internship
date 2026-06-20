// promise is an object that represent future result 
// it comes with 3 states
// pending , fullfilled(resolved) , rejected
// res and rej are inbuil JS functions

// const promise = new Promise((resolve,reject)=>{
//     resolve(100);
//   
      
// })

// promise.then((amount)=>{
//     console.log("Nishant");
    
// })  to handel response


// const promise = new Promise((resolve,reject)=>{
//     reject(" error occured")
      
// })

// promise.catch((err)=>{
//     console.log(err);
    
// })  to handel reject

// const result = fetch("https://jsonplaceholder.typicode.com/users");
//                                                                     // this give simple format(response object)
// result.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

                                                      // this is used to convert data in json format

// const result = fetch("https://jsonplaceholder.typicode.com/users");

// result.then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// example of promise

// const promise = new Promise((resolve , reject)=>{
//     let success =false;
     
//     if(success){
//         resolve("success");
//     }
//     else{
//         reject("Failed");
//     }
// })

// promise.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// promise chaining  to solve callback hell

// Promise.resolve(10)
// .then((num)=>{
//     return num*2
// }).then((num)=>{
//     return num+5;
// })
// .then((num)=>{
//     console.log(num);
    
// })