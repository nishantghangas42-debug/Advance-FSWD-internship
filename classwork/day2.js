// `  Scope matlab kisi variable ko kaha se access kar sakte hai
// -> Lexical scope = A child function can access its parents function variables
// -> Global scope = We can access at anywhere
// ->Function scope = Access only in function 
// ->Block scope = Access only inside a block`

// let name = "Nishant";
// function show(){
//     console.log(name);
// }
// show()

// {
//     let city = "Delhi";
//     console.log(city)
// }

// Lexical scope and this is lexical chaining

// function outer(){
//     let username= "Nishant";
    
//     function inner(){
//         console.log(username);
//     }
//     inner()
// }
// outer()

// function a(){
//     let x =10;
//     function b(){
//         let y=20;
//         function c(){
//             console.log(x);
//             console.log(y)
//         }
//         c();
//     }
//     b();
// }
// a();

// Closure is a combination of function and its lexical environment
// jab koi child function apne parent funct. ke fully execute hone k baad bhi usse mili value ko hold karke rakta hai to us property ko closure kahate hai

// function outer(){
//     let count = 0;
    
//     function inner(){
//         count++;
//         console.log(count);
//     }
//   return inner;

// }

// const result = outer();
// result();
// result();
// result();

// Examples of lexical chaining

// 1.

// let company ="Google";
// function department(){
//     let dep = "Engineering";
//     function team(){
//         let teamName = "Fronted";
//         function employee(){
//             let emp = "Ram";
//             console.log(company);
//             console.log(dep);
//             console.log(teamName);
//             console.log(emp);


//         }
//         employee();
//     }
//     team();
// }
// department();

// 2.Nearest will print

// let name = "Global";
// function outer(){
//     let name ="Outer";
//     function inner(){
//         let name="inner";
//         console.log(name);
//     }
//     inner();
// }
// outer();

// 3.(return)Just for illusion

// let a = 10 ;
// function outer(){
//     let b=20;
//     return function middle(){
//         let c= 30;
//         return function inner(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
          
//         }
//     }
// }
// const x = outer();
// const y =x();
// y();

// ` IIFE -> Immediately ivoked function expression
//  function banta bhi h aur turant hi execute bhi ho jata h
//  syntax -> (function(){console.log("hello")})()`
 
//  (function(name){
//      console.log(name);
//  })("Ram")
 
//  const result = (function(a,b){
//      return a+b;
//  })(10,20)
//  console.log(result);

// Higher order function -> when a function uise a function as a parameter
//  or a function returning a function as result that will be known as hof\

// function hello(){
//     console.log("hello");
// }
// function execute(fn){
//   fn();
// }
// execute(hello)

// function calculate(a,b,operation ){
//     return operation(a,b);
    
// }
// function add(x,y){
//     return x+y;
    
// }
// console.log(calculate(70,90,add));


// Map it does not affect original array

// const products=[
//     {id:1,name:"TV",price:"1500"},
//     {id:2,name:"LED",price:"1500"},
//     {id:3,name:"Laptop",price:"1500"},
//     {id:4,name:"Computer",price:"1500"},
//     {id:5,name:"Mobile",price:"1500"},
//     {id:6,name:"Smartwatch",price:"1500"}
    
//     ]
    
//     const productname=products.map(p=>p.name);
//     console.log(productname)

// filter method ->when we  want to implement on an array then we use filter it not affect original array

// const results = [12,20,30,40];
// const result =results.filter(a=>a>30)
// console.log(result)


// const products=[
//     {price:10000},
//     {price:300},
//     {price:200},
//     {price:700}
//     ]
    
//     const result  = products.filter(p=>p.price>200);
//     console.log(result);

// const name=["Ram", "NIshant","Sachin","Sahil","Shiv","Gyan"]

// // const result = name.filter(n=>n[0]=='S');
// const result = name.filter(n=>n.startsWith('S'));

// console.log(result)

// Reduce When we have to convert an array into a single value

// const num=[1,2,3,4]
// const sum = num.reduce((acc,cur) => acc*cur,1);
// console.log(sum)

// const num=[1,2,3,4]
// const max = num.reduce((acc,cur) => {return cur>acc ? cur : cur=acc },num[0]);
// console.log(max,"is max value")

const word =["Hello","How","Are","You"]

const result = word.reduce((acc,cur)=>acc+" "+cur);
console.log(result)