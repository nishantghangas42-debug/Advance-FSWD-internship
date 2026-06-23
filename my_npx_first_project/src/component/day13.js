import React, { useState } from 'react'

const  FirstApp = () => {
    const [count , setCount]=useState(0);
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>

    </div>
  )
}

export default FirstApp;