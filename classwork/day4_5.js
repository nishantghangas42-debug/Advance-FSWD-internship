// Error handling and Module 

// type of error ->  
// 1) Reference error variable not exists

// 2) Type error -> data type is wrong acc to operation

// let num=10;
// num.toUpperCase();

// 3)Sybtax error -> Using wrong syntax acc. to defined

// let num=10;
// num.toUpperCase(;

// 4) Range error -> out of bound
// 5) Runtime error -> infinite loop

// try catch block in JS -> Used to save from API crash

// try{
    // doing the work
// }
// catch {
    // if work not done then give error 
// }

// example -> if we not use try catch block here then it will give and not print B

// console.log("A");
// console.log(user.name);
// console.log("B");

// console.log("A");
// try{
//     console.log(user.name);
// }
// catch(error){
//     console.log("Error handeled");
//     console.log(error.name);
//     console.log(error.message);
    // or
    // console.log(error);
    // error is an object with name and message property
    
// }
// finally{ this will run at any cost dont care about try or catch
// }
// console.log("B");

// Throw self made type of error

// let age =17;
// if(age<18){
//     throw new Error(
//         "You are not eligible ")
// }
// console.log(age)

// Modular programming
// project 5000 lines so not making single file we make different different file like signup login working server main.js 

// exports default const a=5; modern method 
// import a from "./new.js"

// module.exports={a}  old method
// const {a}=require{"./new.js"}

// dynamic import -> lazy loading
// html ->head ->body
// head ->h2 p tags

// queryselector -> select single 
// queryselectorall -> select all

// Events
//  Click , Double click , Typing , hover , submit , resize , drag , drop all of these are events

// add eventlistener -> element.addEventListener(
// event name
// callback function  
// )

// working of event
// listener regiterd
// to wait for occuring that event
// anyone triggered this event
// callback function will be executed