import React, { useState } from 'react'

const Checksyntheticevent = () => {

  // function handleChange(e) {
  //     console.log(e.target.value);
  //   }

  const user = [
    { name: "Nishant", age: 22 },
    { name: "Nitin ", age: 23 }

  ]

  const [search, setsearch] = useState("")
  const filtereduser = user.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filtereduser)


  return (
    <>
      <div>
        {/* input: <input type="text" onChange={handleChange} /> */}
        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
        {filtereduser.map((e) => {
          return(
          <div>{e.name} - {e.age}
          </div>
          )
        })}
      </div>

    </>

  )
}

export default Checksyntheticevent