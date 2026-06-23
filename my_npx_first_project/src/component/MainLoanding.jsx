// import React from 'react'
import Card from './card.js'

const MainLoanding = ({ onAddToCart }) => {

    const products = [
        {id:1,title:"Iphone15", category:"Smartphone", rating:4.8, stock:15, quantity:15, image:"https://m.media-amazon.com/images/I/61Brhn4WBIL._AC_UY327_FMwebp_QL65_.jpg", description:"iphone 15 white color"},
        {id:2,title:"Foraml shoes", category:"Fashion", rating:4.2, stock:12, quantity:12, image:"https://m.media-amazon.com/images/I/61w-Q38T2lL._AC_SY145_.jpg", description:"Black formal shoes for party and professional metting"},
        {id:3,title:"Table Lamp", category:"Decorative Lights", rating:4.5, stock:25, quantity:25, image:"https://m.media-amazon.com/images/I/61jRUob8mhL._AC_SY145_.jpg", description:"table lamp, decorate your study table"},
        {id:4,title:"Shocks", category:"Fashion", rating:3.8, stock:18, quantity:18, image:"https://m.media-amazon.com/images/I/61b4iWTSp6L._AC_SY145_.jpg", description:"cotton shocks"},
        {id:5,title:"Casual Shirt", category:"Fashion", rating:5, stock:5, quantity:5, image:"https://m.media-amazon.com/images/I/6114oJ6wgoL._AC_UL480_FMwebp_QL65_.jpg", description:`DEELMO Men’s Stylish Cotton Blend Casual Shirt || Full Sleeve Button-Down Shirt with Dual Flap Pockets || Comfortable Breathable Fabric || Perfect for Casual Office and Outing Wear`},
        {id:6,title:"IQOO Z10R 5G", category:"Smartphone", rating:4.1, stock:100, quantity:100, image:"https://m.media-amazon.com/images/I/61IOl0PvbFL._AC_UY327_FMwebp_QL65_.jpg", description:`iQOO Z10R 5G (Moonstone, 8GB RAM, 256GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu`},
        {id:7,title:"Macbook air m5", category:"Laptop", rating:4.9, stock:105, quantity:105, image:"https://m.media-amazon.com/images/I/61Di24QT6GL._AC_UY327_FMwebp_QL65_.jpg", description:`Apple 2026 MacBook Air 13″ Laptop with M5 chip: AI and Apple Intelligence, 34.46 cm (13.6″) Liquid Retina Display, 16GB Unified Memory, 1TB SSD Storage, 12MP Center Stage Camera, Touch ID; Sky Blue`},
        {id:8,title:"OnePlus Node CE6", category:"Smartphone", rating:4.4, stock:1, quantity:1, image:"https://m.media-amazon.com/images/I/61Di24QT6GL._AC_UY327_FMwebp_QL65_.jpg", description:`OnePlus Nord CE6 | 8GB+128GB | Pitch Black | Snapdragon 7s Gen 4 | Segment's Fastest Touch Response | 8000mAh Battery | 144Hz 1.5K AMOLED Display | 50MP Main + 32MP Selfie 4K Cameras | IP66,68,69,69K`},
        {id:9,title:"Galaxy book 6", category:"Laptop", rating:4.8, stock:7, quantity:7, image:"https://m.media-amazon.com/images/I/71efDx+EJBL._AC_UY327_FMwebp_QL65_.jpg", description:`Samsung Galaxy Book6 (Gray, 16GB RAM, 512GB SSD) | Intel Core Ultra 7 (Series 3) | 16" WUXGA+ Display with Touchscreen | 24Hrs Battery Life | 120 Hz Refresh Rate | Dolby Atmos Stereo Speakers | AI PC`},
        {id:10,title:"Lays", category:"Grocery", rating:4.6, stock:1000, quantity:1000, image:"https://m.media-amazon.com/images/I/41Pco1+xsHL._SY300_SX300_QL70_FMwebp_.jpg", description:`Lays American Style Cream & Onion, 50g(40g+10g)g - [Pack of 10] -`},
        {id:11,title:"Almonds", category:"Grocery", rating:4.11, stock:105, quantity:105, image:"https://m.media-amazon.com/images/I/81xoauWxgjL._AC_UL480_FMwebp_QL65_.jpg", description:`Amazon Brand - Vedaka California Almonds | 1 Kg | 100% Natural Badam Giri | Rich In Protein & Dietary Fiber | Crunchy Texture & Delicious Nutty Flavour | No Added Preservatives Or Artificial Flavors`},
        {id:12,title:"Lexton Star Curtain Light", category:"Decorative Lights", rating:4.4, stock:5, quantity:5, image:"https://m.media-amazon.com/images/I/81nDvbf7fPL._AC_UL480_FMwebp_QL65_.jpg", description:`MIRADH 10 SMD Star Curtain Fairy Lights with 8 Modes – 120 LED String, Diwali Navratri Christmas New Year Home Decor (Warm White)`},
        {id:13,title:"Modern LED Curvy 10Watt Wall Light", category:"Decorative Lights", rating:4.9, stock:150, quantity:150, image:"https://m.media-amazon.com/images/I/41Du538imbL._AC_UL480_FMwebp_QL65_.jpg", description:`Modern LED Curvy 10Watt Wall Light 3 Color Modes (Warm, Neutral, Cool White) | Indoor Wall Lamp for Bedroom, Living Room, Hallway Etc`},
        {id:14,title:"Tata Tea Gold", category:"Grocery", rating:4.4, stock:145, quantity:145, image:"https://m.media-amazon.com/images/I/5109sLDpkvL._AC_UL480_FMwebp_QL65_.jpg", description:`Tata Tea Gold 1kg, Premium Assam Teas With Gently Rolled Aromatic Long Loose Leaves, Rich & Aromatic Chai, Black Tea`},
        {id:15,title:"Regular Fit Jeans", category:"Fashion", rating:4.21, stock:90, quantity:90, image:"https://m.media-amazon.com/images/I/61dFcpPdJkL._AC_UL480_FMwebp_QL65_.jpg", description:`Ben Martin Men's Smart Fit Stretchable Jeans || Mid-Rise Denim Pants with Whisker Wash || Premium Casual Wear Jean for Men || 5 Pocket Jean's for Men's (2)`},
    ]

  return (
    <div>
        <Card items={products} onAddToCart={onAddToCart} />
    </div>
  )
}

export default MainLoanding