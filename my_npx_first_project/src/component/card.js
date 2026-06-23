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


const Card = ({ items = [], onAddToCart }) => {
  const handleAddToCart = (item) => {
    if (typeof onAddToCart === "function") {
      onAddToCart(item);
    } else {
      console.log("Add to cart:", item);
    }
  };



  if (!items?.length) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#555" }}>
        No products available.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "18px",
        padding: "20px",
      }}
    >
      {items.map((item, index) => {
        const inStock = Number(item.stock) > 0;

        return (
          <div
            key={item.id ?? index}
            style={{
              background: "#f8f9fa",
              borderRadius: "15px",
              padding: "18px",
              textAlign: "center",
              transition: "0.3s",
              cursor: "default",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "12px",
              }}
            />

            <h3
              style={{
                fontSize: "18px",
                color: "#222",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                margin: "0 0 10px",
                color: "#555",
                fontSize: "14px",
              }}
            >
              ⭐ {item.rating} | {item.category}
            </p>

            <p
              style={{
                margin: "0 0 6px",
                color: "#333",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Available quantity: {item.quantity ?? item.stock}
            </p>

            <p
              style={{
                margin: "0 0 16px",
                color: "#777",
                fontSize: "14px",
              }}
            >
              Product #{index + 1}
            </p>

            <div
              style={{
                background: "#eef2f7",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "15px",
                textAlign: "left",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  color: "#222",
                }}
              >
                Product Details
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#444",
                }}
              >
                {item.description}
              </p>
            </div>

            <p
              style={{
                color: "#007185",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              🚚 Free Delivery
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={!inStock}
                style={{
                  flex: 1,
                  background: inStock
                    ? "linear-gradient(90deg, #1e3c72, #2a5298)"
                    : "#999",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  cursor: inStock ? "pointer" : "not-allowed",
                }}
              >
                🛒 Add Cart
              </button>

              <button
                disabled={!inStock}
                style={{
                  flex: 1,
                  background: inStock ? "#ff9900" : "#999",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  cursor: inStock ? "pointer" : "not-allowed",
                }}
              >
                ⚡ Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;