import React  from "react";
import Navbar from "./component/navbar"
import Card from "./component/card.js"


const App = () => {
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

  const singleProduct = [
    {
      image:"https://m.media-amazon.com/images/I/61WM6IDaBPL._AC_UY327_FMwebp_QL65_.jpg",
      title:"iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu",
      rating:"4.5 ⭐",
      lastMonthSell:"5K+ bought in past month",
      price:"₹22,999 M.R.P: ₹23,499M.R.P: ₹23,499 (2% off)",
      DeliveryDetails:`FREE delivery
      Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/819J-5RMtHL._AC_UL480_FMwebp_QL65_.jpg",
      title:`SWAGR
12 Pairs Solid Cotton Ankle Length Socks for Men Women, Pack of 12....`,
      rating:"4.1 ⭐",
      lastMonthSell:"3K+ bought in past month",
      price:`₹168.98 (₹14.08/count) 
      M.R.P: ₹1,299M.R.P: 
      ₹1,299 (87% off)`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/71eX66ytH+L._AC_UY327_FMwebp_QL65_.jpg",
      title:`Apple
2026 MacBook Air 13″ Laptop with M5 chip: AI and Apple Intelligence, 34.46 cm (13.6″) Liquid Retina Display, 16GB Unified Memory, 512GB SSD Storage, 12MP Center Stage Camera, Touch ID;`,
      rating:"4.5 ⭐",
      lastMonthSell:"500+ bought in past month",
      price:`₹1,10,290 M.R.P: ₹1,19,900M.R.P: ₹1,19,900 (8% off)
Flat INR 2000 Off on SBI CardsFlat INR 2000 Off on SBI Cards`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/71+oHMoJ8cL._AC_UY327_FMwebp_QL65_.jpg",
      title:`Deewar Mein Ek Khidki Rahti Thi । दीवार में एक खिड़की रहती थी [ साहित्य अकादमी पुरस्कार से पुरस्कृत उपन्यास ]
Hindi Edition | by Vinod Kumar Shukla  | 26 December 2023`,
      rating:"4.5⭐",
      lastMonthSell:"Paperback",
      price:`₹190 M.R.P: ₹299M.R.P: ₹299 (36% off)
Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
      DeliveryDetails:`FREE delivery Thu, 25 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/719sxEJKLZL._AC_UY327_FMwebp_QL65_.jpg",
      title:`EooCoo
Premium Keyboard Cover Compatible for 2026 2025-2021 M5-M2 MacBook Air 13/15,M5-M1 Pro/Max MacBook Pro 14/16, 2026 MacBook Neo 13,Laptop Accessories Ultra Thin Protector Skin`,
      rating:"4.2 ⭐",
      lastMonthSell:"2K+ bought in past month",
      price:`₹299 M.R.P: ₹454M.R.P: ₹454 (34% off)
Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/51NdACz6hcL._AC_UY327_FMwebp_QL65_.jpg",
      title:`EooCoo
Case Compatible for New Apple MacBook Air 13 inch M5 2026-2022 M4 M3 M2, A3449 A3240 A3113 A2681 with Touch ID, Mac Air 13.6 inch Laptop Protective Plastic Hard Shell Cover Smooth-`,
      rating:"4.1 ⭐",
      lastMonthSell:"1K+ bought in past month",
      price:`₹799 M.R.P: ₹1,199M.R.P: ₹1,199 (33% off)
Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/81s4wKEliIL._AC_UY327_FMwebp_QL65_.jpg",
      title:`Dyazo
13.3 inch Laptop Bag Sleeve Sleeve Bag Cover for 13 inch Apple Mac Book Air Pro Retina 13 13.3 inch MacBook 13.3 inch and all other laptops & Notebooks with front packet and handle (Grey)`,
      rating:"4.3 ⭐",
      lastMonthSell:"1K+ bought in past month",
      price:`₹299 M.R.P: ₹899M.R.P: ₹899 (67% off)
Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/61ULimPWODL._AC_UY327_FMwebp_QL65_.jpg",
      title:`Apple
iPhone 17e 256 GB: 15.40 cm (6.1″) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; Black`,
      rating:"4.3 ⭐",
      lastMonthSell:"500+ bought in past month",
      price:`₹64,900
Save extra with No Cost EMISave extra with No Cost EMI`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun`
    },
    {
      image:"https://m.media-amazon.com/images/I/81iGBopWA9S._AC_UY327_FMwebp_QL65_.jpg",
      title:`Anandamath (Hindi)
Hindi Edition | by Bankimchandra Chatterjee | 5 June 2025`,
      rating:"4.5 ⭐",
      lastMonthSell:"Paperback",
      price:`₹129 M.R.P: ₹149M.R.P: ₹149 (13% off)
Up to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI ca...`,
      DeliveryDetails:`FREE delivery Mon, 22 Jun
`
    }
  ]

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        {/* <Card items={products} />
        <Card items={products2} /> */}
        <Card items={singleProduct} />
      </div>
    </div>
  );
};

export default App;