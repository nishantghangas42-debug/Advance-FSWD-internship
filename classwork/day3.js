// Curry function 

// function add( a){
//     return function add( b){
//         return function add( c){
//             return a+b+c;
//         }
//     }
// }
//         console.log(add(2)(3)(5));
        
        
//         function sendAutomail(to){
//             return function(subject){
//                 return function(body){
//                     console.log(`sending Email to ${to} with subject ${subject} and ${body}`)
//                 }
//             }
//         }
//         let step1 = sendAutomail("nishantghangas42@gmail.com");
        
//         let step2 = step1("Regarding conformation mail of signup")
//         let step3 = step2("This is proctored mail sent for information purpose");

// Objects 
// Address of object will be stored in memory not direct object 

// const students = {
//     name: "Nishant",
//     age: 20,
//     city : "Panipat",
//     sayYourSkills:function (){
//         console.log("hello my skills are MERN stack")
//         console.log(this.city)// to access a key value of object use this
//     }
// }

// console.log(students.name)
// console.log(students["age"]) //2nd type to access

// let key = "name"
// console.log(students[key]) // if we dot syntax then undefined
// console.log(students.key) // undefined


// students.sayYourSkills();
// when we use a function in an object at that time it will be known as method

// Eg of how browser store address Shyam will print
// const obj1 ={
//     name:"Ram"
// }
// const obj2 = obj1;

// obj2.name = "Shyam";

// console.log(obj1.name)


// Prototype

// const dog1 = {
//     name:"Pilla",
//     bark(){
//         console.log("Hello I am barking");
//     }
// }

// const dog2 = {
//     name:"Jack",
//     bark(){
//         console.log("Hello I am barking");
//     }
// }

// const dog3 = {
//     name:"Meta",
//     bark(){
//         console.log("Hello I am barking");
//     }
// }
// dog3.bark();

// here memory waste so make prototype animal below

// const animal = {
//     bark(){
//         console.log("Hello I am barking");
//     }
// }

// const dog = Object.create(animal);
// dog.name="Meta"
// dog.bark();

// constructor

// const student0 = {
//     name : "Ram",
//     age: 20
// }

// const student1 = {
//     name : "Rama",
//     age: 22
// }

// const student3 = {
//     name : "Ramu",
//     age: 23
// }

// const student4 = {
//     name : "Ramlal",
//     age: 24
// }

// This is a constructor function that reduce code line

// function student(name,age ){
//     this.name=name;
//     this.age=age;
// }

// const s1 = new student("ram",20)
// const s2 = new student("Nishant",18)

// console.log(s1)


// function User(name){
//     this.name=name;
// }

// const u1= new User("Ram")
//  console.log(u1) //this return object
//  console.log(u1.name) //this return name

// prototype examples


// har ek function ke pass prototype property hoti hai
  
//   function Student(name,age){
//     this.name = name;
//     this.age = age;
// }
// Student.prototype.greet= function(){
//         console.log("Hello");
// }
// const s1 = new Student("ram", 25);
// const s2 = new Student("Jatin", 26);
// const s3 = new Student("Pravin", 28);

// s1.greet();
// s2.greet();
// s3.greet();

// ES6  style Definition

// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("Hello")
//     }
// }

// Inheritance

// class animal{
//     eat(){
//         console.log("Eating");
//     }
//     constructor(name){
//         this.name=name;
// }
// }

// class dog extends animal{
//     constructor(name){
//         super(name);
//         this.name=name;
//     }
    
// }
// const d = new dog("tom");
// d.eat();
// console.log(d)

// getter setter sybtax

// User.getName();

// get name(){
//     return this._name
// }

//Syntax getter 

// class user{
//     get message(){
//         return "hello";
//     }
// }
// const u = new user();
// console .log (u.message)

// // Setter

// class user{
//     set age(value){
//         if(value<0){
//             throw Error("INVALID age")
//         }
//     }
//     this._age=value;
// }


// static method to access noraml methods


// class math{
//     static add(a,b){
//         return a+b;
//     }
// }
// math.add(10,20);
// there is no need tok create object in static class

// Que.
// class animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class dog extends animal{
//     bark(){
//         console.log("bark")
        
//     }
// }

// const d = new dog()
// d.bark();
// d.eat();