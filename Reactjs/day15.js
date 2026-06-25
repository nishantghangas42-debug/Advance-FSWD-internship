// react events -->
// <button onclick= "helo ()">click me</button>  
// or button.addEventListener("click", helo)  
// synthetic events -> react will not direct use browser events 
// -> react will create a wraper that is called synthetic events and it will handle the event in react way
// -> in case of normal js events in browser there can be different things but once we will 
//     use wraper then it will hide these diffences 
// form validation in react js 
// when i click on submit bbutton two things will happen
// 1. page will refresh
// 2. form data will be sent to server 
// but in react we want to handle this event in react way so we will use preventDefault() method