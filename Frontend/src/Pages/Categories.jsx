import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  
    const images = [
      {
        id: 1,
        name: "Luxury Watch",
        desc: "Experience timeless elegance with this premium-quality luxury watch, crafted for style and durability.",
        Url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNoJTIwJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      },
      {
        id: 2,
        name: "Smartphone",
        desc: "Stay connected and capture life's moments with this cutting-edge smartphone featuring advanced technology.",
        Url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 3,
        name: "Wireless Earbuds",
        desc: "Immerse yourself in high-quality sound with these sleek, modern wireless earbuds designed for comfort and portability.",
        Url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 4,
        name:"High-Performance Laptop",
        desc: "Boost your productivity with this high-performance laptop, perfect for work, gaming, and entertainment.",
        Url: "https://images.unsplash.com/photo-1510174210589-ed6667381173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ];
 

  return (
<div className="text-center bg-gray-100 py-12">
  <div className="p-6 md:p-12">
    <p className="text-sm md:text-lg">Discover luxurious and high-quality items for the best discounts</p>
    <h1 className="pb-6 font-bold text-2xl md:text-5xl">Categories</h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 md:px-16">
    {images.map((image, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row  items-center bg-white shadow-lg overflow-hidden"
      
      >
        {/* Text Section */}
        <div className="flex-1 p-6 text-left">
          <h2 className="text-2xl font-bold mb-2">{image.name}</h2>
          <p className="text-gray-600 mb-4">{image.desc}</p>
          <Link
            to={`/product/${image.id}`}
            className="text-blue-500 font-semibold underline hover:text-blue-700"
          >
            Shop Now
          </Link>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2">
        <Link to={`/product/${image.id}`}>
        <div className='p-4'>
          <img
            src={image.Url}
            alt={image.name}
            className="w-full h-48 md:h-40 object-cover rounded-md"
          />
          </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  
  
  );
}

export default Categories;
