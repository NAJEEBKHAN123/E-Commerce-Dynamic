import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/469328286/photo/smartwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=whMet6PGP0e87TBJKvEl2YkDiyeG0hGz3kt1Y6MjLVo=",
    hoverUrl: "https://media.istockphoto.com/id/938071234/vector/smart-watch-icon-hand-watch-vector.jpg?s=612x612&w=0&k=20&c=MtOPMOnpG6n5DWD6G7kggaXPMskYBpEbJIeUhJ8WFj4=",
    name: "Round smartwatch",
    price: 7000,
    desc: "Experience style and functionality with the Round Smartwatch.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1594322267233-53535f9879c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
    name: "Smart Phone",
    price: 6500,
    desc: "Stay connected and productive with the Smart Phone.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    hoverUrl: "https://plus.unsplash.com/premium_photo-1661501394765-528543a7a675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNnx8fGVufDB8fHx8fA%3D%3D",
    name: "HP laptop",
    price: 6500,
    desc: "Powerful performance for all your computing needs with the HP Laptop.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1662348316397-7afeb1045fd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1590658341922-15b2de4f4014?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
    name: "Wireless Earbuds",
    price: 6500,
    desc: "Immerse yourself in music with the Wireless Earbuds.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    hoverUrl: "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
    name: "IPhone",
    price: 6500,
    desc: "Elevate your lifestyle with the iconic IPhone.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1624258919367-5dc28f5dc293?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1612622837671-5a94ceef08f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
    name: "Microsoft Surface Buds",
    price: 6500,
    desc: "Crystal-clear sound with Microsoft Surface Buds.",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1554412664-6a4d8f640b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    hoverUrl: "https://plus.unsplash.com/premium_photo-1673797038669-2c52116df2fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    name: "Apple Laptop",
    price: 6500,
    desc: "Unleash creativity with the sleek Apple Laptop.",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1667754188015-ffa59a35d2b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
    name: "Zwat Watch",
    price: 6500,
    desc: "Stay punctual with the elegant Zwat Watch.",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverUrl: "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    name: "Tablet",
    price: 6500,
    desc: "Enjoy versatility with the high-performance Tablet.",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1639564879163-a2a85682410e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1554151447-b9d2197448f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Smart watch",
    price: 6500,
    desc: "Track your fitness with the advanced Smart Watch.",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1707438095940-1eee18e85400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    hoverUrl: "https://images.unsplash.com/photo-1707438095956-25a7a502df16?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samsung Galaxy S22 Ultra",
    price: 6500,
    desc: "Capture every detail with the Samsung Galaxy S22 Ultra.",
  },
  {
    id: 12,
    url: "https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    hoverUrl: "https://images.unsplash.com/photo-1598257006756-51088d8c1126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    name: "Nokia Phone",
    price: 6500,
    desc: "Reliability meets innovation with the Nokia Phone.",
  },
];


function Collection() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const handleImgClick = (product) => {
    navigate(`/collection/${product.id}`, { state: product });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center p-6">
        <p>
          Explore our online store providing a vast range of innovative home
          appliances and simply make your home smart.
        </p>
        <h1 className="text-4xl font-bold pt-4">Collection</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-16 p-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white cursor-pointer p-2 shadow-lg overflow-hidden"
            onClick={() => handleImgClick(product)}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={hoveredId === product.id ? product.hoverUrl : product.url}
              alt={product.desc}
              className="w-full h-48 object-cover sm:rounded-md"
            />
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h1>Price: {product.price} $</h1>
            <p>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
