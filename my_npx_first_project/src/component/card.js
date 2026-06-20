// import React from "react";

// function Card(){
//     return( <div style={{border:"2px solid black",width:"500px"}}>

//               {/* <h2 style={{display:"flex",justifyContent:"center"}}>Products you like </h2>
//               <br/> 
              
//               <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr", gap:"15px"}}>

//                 <div style={{display :"flex",height:"220px",width:"100%"}}>

//                     <img src="https://tse1.mm.bing.net/th/id/OIF.25EFWuNBFL1lhkjVB03jnA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
//                     alt="img">
//                         </img>
//                 </div>

//            <div style={{display :"flex",height:"220px",width:"100%"}}>

//             <img 
//             src="https://tse2.mm.bing.net/th/id/OIF.L90A1Yuj3RVvI5Vv4e5OIA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
//             alt="img">
//                 </img>
//         </div>

//            <div style={{display :"flex",height:"220px",width:"100%"}}>
//             <img src="https://tse1.mm.bing.net/th/id/OIF.25EFWuNBFL1lhkjVB03jnA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
//             alt="img"></img>
//         </div>
//     // </div> */}
           
  


           
//     </div>
//     )
//     // there is always a single parent 
// }
// export default Card


const Card = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#f8f9fa",
            borderRadius: "15px",
            padding: "12px",
            textAlign: "center",
            transition: "0.3s",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "120px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />

          <h3
            style={{
              fontSize: "16px",
              color: "#222",
              marginBottom: "5px",
            }}
          >
            {item.title}
          </h3>

          <h3
            style={{
              fontSize: "16px",
              color: "#222",
              marginBottom: "5px",
            }}
          >
            {item.rating}
          </h3>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.lastMonthSell}
          </p>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.price}
          </p>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.DeliveryDetails}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;