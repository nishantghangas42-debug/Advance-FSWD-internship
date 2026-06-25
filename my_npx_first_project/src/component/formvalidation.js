import React,{useState} from 'react'

const Formvalidation = () => {
    const[name,setname] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(name === ""){
        console.log("please enter name")
    }
  return (
    <div>
          <h1>form validation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                <button type="submit">Submit</button>
            </form> 
    </div>
  )
}
}
export default Formvalidation;