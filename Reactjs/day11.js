// why react js -> because if we change a little in our code then DOM tree will be made again and it will 
//                 be expensive and slower the speed of website so react is introduced

// React ->           It will make a virtual dom and all change in code occured virtual dom also updated.
//                    But actual dom will not be updated.
// diff algorithm ->  it compare both dom tree and then find changes 
// Reconsilation ->   Purane virtual dom aur naye virtual dom ko compare karke actual dom me minimum changes karna  
// CDN links ->        it is used to intrfoduce react powers to our project
// React.createElemnet -> it is used to create an html element in react js
// it takes three parameters 
                            //   type of element
                            // additonal detail like class,id aur css 
                            // content of that element 

//  React ka kam h UI create karne aur React DOM ka kam h usse browser par dikhana 

// JSX - React.craeteElemnt se create karne ki jagah ab hm element ko create karne ke liye jsx kar sakte hai 
// const heading = <h1> hello </h1>
// Babel ->it converts our jsx code  to js for brower 
// to manage such large number of files in react , we will use the concept of bundeler 
// parcel js  hot module reloding 
// rules related to jsx 
// it must have one parent 
// 