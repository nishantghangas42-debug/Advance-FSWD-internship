import React, { useState } from "react";
import Navbar from "./component/navbar";
import MainLoanding from "./component/MainLoanding.jsx";
// import FirstApp from "./component/day13.js";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    const quantityToAdd = Number(product.quantity) || 1;
    setCartItems((prevItems) => [
      ...prevItems,
      ...Array.from({ length: quantityToAdd }, () => product),
    ]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === productId);
      if (index === -1) return prevItems;
      const nextItems = [...prevItems];
      nextItems.splice(index, 1);
      return nextItems;
    });
  };

  const removeAllFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setShowCart((state) => !state);
  };

  const cartSummary = cartItems.reduce((summary, item) => {
    const existing = summary.find((entry) => entry.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      summary.push({ ...item, quantity: 1 });
    }
    return summary;
  }, []);
  // const products = [
  //   {
  //     image: "https://m.media-amazon.com/images/I/417qDqDjimL._MCnd_AC_.jpg",
  //     title: "Men's Cricket Shoes",
  //     views: 6,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/41WnZzmj80L._MCnd_AC_.jpg",
  //     title: "Cricket Bat",
  //     views: 3,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/31YShIe0zDL._MCnd_AC_.jpg",
  //     title: "Cricket Bag",
  //     views: 4,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/41BIUrGIxVL._MCnd_AC_.jpg",
  //     title: "Cricket Gloves",
  //     views: 2,
  //   },
  // ];

  // const products2 = [
  //   {
  //     image: "https://m.media-amazon.com/images/I/71O1pUfzoYL._AC_SY95_.jpg",
  //     title: "HP 15",
  //     views: 12,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/71GI0RNH4pL._AC_SY95_.jpg",
  //     title: "Asus Vivobook S14",
  //     views: 1,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/418dOHs7XKL._AC_SY95_.jpg",
  //     title: "Asus Vivobook 14",
  //     views: 14,
  //   },
  //   {
  //     image: "https://m.media-amazon.com/images/I/71aaW7HXKnL._AC_SY95_.jpg",
  //     title: "Asus Vivobook 16",
  //     views: 8,
  //   },
  // ];

//   const singleProduct = [
//     {
//       image:"https://m.media-amazon.com/images/I/61WM6IDaBPL._AC_UY327_FMwebp_QL65_.jpg",
//       title:"iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu",
//       rating:"4.5 ⭐",
//       lastMonthSell:"5K+ bought in past month",
//       price:"₹22,999 M.R.P: ₹23,499M.R.P: ₹23,499 (2% off)",
//       DeliveryDetails:`FREE delivery
//       Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/819J-5RMtHL._AC_UL480_FMwebp_QL65_.jpg",
//       title:`SWAGR
// 12 Pairs Solid Cotton Ankle Length Socks for Men Women, Pack of 12....`,
//       rating:"4.1 ⭐",
//       lastMonthSell:"3K+ bought in past month",
//       price:`₹168.98 (₹14.08/count) 
//       M.R.P: ₹1,299M.R.P: 
//       ₹1,299 (87% off)`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/71eX66ytH+L._AC_UY327_FMwebp_QL65_.jpg",
//       title:`Apple
// 2026 MacBook Air 13″ Laptop with M5 chip: AI and Apple Intelligence, 34.46 cm (13.6″) Liquid Retina Display, 16GB Unified Memory, 512GB SSD Storage, 12MP Center Stage Camera, Touch ID;`,
//       rating:"4.5 ⭐",
//       lastMonthSell:"500+ bought in past month",
//       price:`₹1,10,290 M.R.P: ₹1,19,900M.R.P: ₹1,19,900 (8% off)
// Flat INR 2000 Off on SBI CardsFlat INR 2000 Off on SBI Cards`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/71+oHMoJ8cL._AC_UY327_FMwebp_QL65_.jpg",
//       title:`Deewar Mein Ek Khidki Rahti Thi । दीवार में एक खिड़की रहती थी [ साहित्य अकादमी पुरस्कार से पुरस्कृत उपन्यास ]
// Hindi Edition | by Vinod Kumar Shukla  | 26 December 2023`,
//       rating:"4.5⭐",
//       lastMonthSell:"Paperback",
//       price:`₹190 M.R.P: ₹299M.R.P: ₹299 (36% off)
// Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
//       DeliveryDetails:`FREE delivery Thu, 25 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/719sxEJKLZL._AC_UY327_FMwebp_QL65_.jpg",
//       title:`EooCoo
// Premium Keyboard Cover Compatible for 2026 2025-2021 M5-M2 MacBook Air 13/15,M5-M1 Pro/Max MacBook Pro 14/16, 2026 MacBook Neo 13,Laptop Accessories Ultra Thin Protector Skin`,
//       rating:"4.2 ⭐",
//       lastMonthSell:"2K+ bought in past month",
//       price:`₹299 M.R.P: ₹454M.R.P: ₹454 (34% off)
// Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/51NdACz6hcL._AC_UY327_FMwebp_QL65_.jpg",
//       title:`EooCoo
// Case Compatible for New Apple MacBook Air 13 inch M5 2026-2022 M4 M3 M2, A3449 A3240 A3113 A2681 with Touch ID, Mac Air 13.6 inch Laptop Protective Plastic Hard Shell Cover Smooth-`,
//       rating:"4.1 ⭐",
//       lastMonthSell:"1K+ bought in past month",
//       price:`₹799 M.R.P: ₹1,199M.R.P: ₹1,199 (33% off)
// Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/81s4wKEliIL._AC_UY327_FMwebp_QL65_.jpg",
//       title:`Dyazo
// 13.3 inch Laptop Bag Sleeve Sleeve Bag Cover for 13 inch Apple Mac Book Air Pro Retina 13 13.3 inch MacBook 13.3 inch and all other laptops & Notebooks with front packet and handle (Grey)`,
//       rating:"4.3 ⭐",
//       lastMonthSell:"1K+ bought in past month",
//       price:`₹299 M.R.P: ₹899M.R.P: ₹899 (67% off)
// Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/61ULimPWODL._AC_UY327_FMwebp_QL65_.jpg",
//       title:`Apple
// iPhone 17e 256 GB: 15.40 cm (6.1″) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; Black`,
//       rating:"4.3 ⭐",
//       lastMonthSell:"500+ bought in past month",
//       price:`₹64,900
// Save extra with No Cost EMISave extra with No Cost EMI`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun`
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/81iGBopWA9S._AC_UY327_FMwebp_QL65_.jpg",
//       title:`Anandamath (Hindi)
// Hindi Edition | by Bankimchandra Chatterjee | 5 June 2025`,
//       rating:"4.5 ⭐",
//       lastMonthSell:"Paperback",
//       price:`₹129 M.R.P: ₹149M.R.P: ₹149 (13% off)
// Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
//       DeliveryDetails:`FREE delivery Mon, 22 Jun
// `
//     },
//     {
//       image:"https://m.media-amazon.com/images/I/71tz3adVWaL._AC_UY436_FMwebp_QL65_.jpg",
//       tittle:`Samsung
// Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 256GB Storage),
//  200MP Camera, S Pen Included, Long Battery Life` ,
//       rating :"5⭐",
//       lastMonthSell:"100+ bought in past month",
//       price:"99,999 M.R.P: ₹1,29,999M.R.P: ₹1,29,999 (23% off)",
//       DeliveryDetails:`
// FREE delivery Thu, 25 Jun
// Or fastest delivery Tomorrow, 24 Jun` 

//     }
//   ]

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={toggleCart} />

      {showCart && (
        <div style={{ padding: "20px", background: "#f4f6f8" }}>
          <h2 style={{ margin: 0, marginBottom: "12px" }}>
            Cart Products ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <p style={{ color: "#555" }}>Your cart is empty.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "14px",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {cartSummary.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: "12px",
                    padding: "14px",
                    background: "white",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "8px" }}
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: 0, fontSize: "16px" }}>{item.title}</h3>
                      <p style={{ margin: "4px 0 0", color: "#666", fontSize: "14px" }}>
                        Category: {item.category}
                      </p>
                      <p style={{ margin: "4px 0 0", color: "#666", fontSize: "14px" }}>
                        Rating: {item.rating}
                      </p>
                      <p style={{ margin: "4px 0 0", color: "#666", fontSize: "14px" }}>
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "#ef4444",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          style={{
                            background: "#22c55e",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAllFromCart(item.id)}
                        style={{
                          background: "#f97316",
                          color: "white",
                          border: "none",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      >
                        Remove all
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <MainLoanding onAddToCart={handleAddToCart} />
      {/* <FirstApp /> */}
    </div>
  );
};

export default App;