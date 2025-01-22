import  { useState, useEffect } from 'react';

function Banner() {
  const images = [
    "https://images.unsplash.com/photo-1707438095902-cc23b01ac7a2?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1bXNpbmclMjBzMjJ8ZW58MHx8MHx8fDA%3D", // Mobile
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&auto=format&fit=crop&q=80", // Laptop
    "https://plus.unsplash.com/premium_photo-1728324783539-50d0b699118d?w=1920&auto=format&fit=crop&q=100", // Brand Watch
    "https://images.unsplash.com/photo-1543069190-7f59e6bbe223?w=1020&auto=format&fit=crop&q=80", // Watch
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        return newIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div
      className="bg-cover bg-center h-[600px] flex items-center justify-center relative"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="text-center text-white relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Latest Tech</h1>
        <p className="text-lg md:text-xl mb-6">
          Explore top deals on mobiles, laptops and watches!
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-2 ">
          <a
            href="/products"
            className="px-6 py-3  bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3  bg-gray-800 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Learn More 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
