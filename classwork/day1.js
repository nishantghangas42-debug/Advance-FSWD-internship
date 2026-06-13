// var a=5
// var a =6
// console.log(a)

// function result(){
//     var x=5;
//     console.log(x);
// }

// console.log(result)
// result()

// introducing let

// let a=5;
// let a=6;
// console.log(a)

// for(let i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },2000);
// }

// const variable

// const user = {
//     name : "Nishant",
//     age : 20,
//     city : "Panipat"
// }

// name = "Nishu"

// console.log(user.name)

// IN case of hoisting all are hoisted
// console.log(value)
// var a =7;
// let b = 8;
// var result = 31;
// const value=48;
// let m = 7

// in case of const and let we can not access them because they are in  
//  temporal dead zone so they cannot be accessed


// function add( a, b){
//     let result = a + b;
//     return result;
// }

// let data = add(5,6);

// console.log(data);


// const greet = (name)=>{
//     return "Hello "+ name +" Welcome "
// }

// console.log(greet("Nishant"))


// Implicit return

// const multiply = (num1 , num2) => num1*num2;
// console.log(multiply(4,7))

// zero parameter

// const fun = ()=>(
//     {name:"Nishant"}
// )
// console.log(fun())


// const products = [
//     {id:1,name:"Mobile",price:15000},
//     {id:2,name:"Pen",price:200},
//     {id:3,name:"Bottle",price:1500},
//     {id:4,name:"TV",price:25000},
//     {id:5,name:"Book",price:500}
//     ]
    
// products.push({id:6,name:"laptop",price:20000})

// console.log(products)

// Search
// const find = products.filter(
//      product => product.price>15000
  
// );
// console.log(find)

// Sum
// const result = products.reduce((sum,item)=>sum
// +item.price,0);

// console.log(result)

// Template literals without concatination of string you can use its value
// it is introduced in ES6

// const name = "Geeta";
// console.log(`my school name is ${name}`)

// used for multi lines 

// const line = `
// my name 
// is 
// Nishant`

// console.log(line)

// let a=3 , b=4;
// console.log(`sum of a and b is ${a+b}`)


//  array destructuring 

// const arr = [10,20,30,40]

// const [a,b,c,d]=arr;

// console.log(d)

// object destructure

// const user ={
//     name : "Nishant",
//     age :20
// }

// const {name,age} = user;

// console.log(name);

// change name to username

// const {
//     name : username
// }=user;

// console.log(username)


// Default parameter & rest/spread operator
// const {data} = response

// eg eflow

// function createuser (role="Guest"){
//     console.log(role);
// }
// createuser("student")

// rest operator gives simple value in array form

function addvalue(...nums){
    console.log(nums);
}

console.log(addvalue(1,2,3,4,5,6,7,8,9));

// spread operator array value to simple

const arr = [1,2,3,4];
const arr2 = [];
function spreadarr(...arr){
    console.log(arr);
}
console.log(spreadarr(arr));