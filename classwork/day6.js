// const parent = document.querySelector("#parent")

// const child = document.querySelector("#child")

// parent.addEventListener("click",()=>{
//     console.log("parent")
// });

// child.addEventListener("click",()=>{
//     console.log("child");
    
// })

// firstly chid will print and then parent reason event bubbbling

/* Event Bubbling
          
          browser event ko travel karta hai like below
          document->HTML->Body->div->button
    
   Event delegation
               
           instead of applying operation over each and every element
           we should apply add event listner on its parent and it will be efficient 
           
   
   Synchronus and Asynchronus programming
   
   events are handeled serial wise but in async less time event will executed first and more time event 
   is sent to waiting area and execution happens parallely
          */

//    sync

//    console.log("1");
//    for(let i=0;i<100000000;i++){}
//    console.log("2");
   
// console.log("Hello World")
// var a = 329043;
// var b = 36522;

// setTimeout(()=>{
// console.log("call me asap");
// },0);

// function multiply(x,y){
// const result =a*b;
// return result ;
// }

// var c = multiply(a,b) 
// console.log("Multiplication Result")
   
// console.log("A");
// setTimeout(()=>{
//     console.log("B");
    
// },2000);
// console.log("C");

// Synchronous vs asynchronous execution:
// Synchronous -> first complete event 1 then go another event
// asynchronous execution -> jo jaldi hoga vo phele execute hoga

// setInterval : hr given time ke bad code execute hoga
// setTimeout : given time ke bad 1 bar code executr hoga


// Call stack : Last In First Out (LIFO) 
// for : timer , api fetching : jo browser krta h


//  Web APIs : It is like a superpower holded by browsers.
// 1. setTimeout
// 2. setInterval
// 3. DOM Events
// 4. API Fetching

// callback function when we pass a function as an argument
// is known as callback function
// ex = setTimeout and setInterval
// Callback Hell ->
// login -> get ortder -> get payment -> get address
// for this we will pass a login function(){
// getuser(function(){
//     getorder(function(){
//         getpayment(function(){

//         })
//     })
// })}
// this sequence become non readable and it 
// ceates callback hell