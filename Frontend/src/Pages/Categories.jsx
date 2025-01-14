import React from 'react';

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
        Url: "https://images.unsplash.com/photo-1574763788197-1808b6ac8142?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNtYXJ0cGhvbmVzfGVufDB8fDB8fHww",
      },
      {
        id: 3,
        name: "Wireless Earbuds",
        desc: "Immerse yourself in high-quality sound with these sleek, modern wireless earbuds designed for comfort and portability.",
        Url: "https://media.istockphoto.com/id/1346147559/photo/modern-wireless-bluetooth-headphones-with-charging-case-on-a-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=o0hYFlMlkhIMUhbw78mZmW3g3w-nCDOOfTKcP3Z2uo8=",
      },
      {
        id: 4,
        name: "High-Performance Laptop",
        desc: "Boost your productivity with this high-performance laptop, perfect for work, gaming, and entertainment.",
        Url: "https://images.unsplash.com/photo-1510174210589-ed6667381173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ];
    

    
    // 
    // 
    // 
    // "https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBob21lJTIwZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2VhcmFibGUlMjBUZWNofGVufDB8fDB8fHww",
    // "https://images.unsplash.com/photo-1541943201372-99066ec6a5c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyb25lcyUyMHdpdGglMjBhZHZhbmNlZCUyMGZlYXR1cmVzfGVufDB8fDB8fHww",
    // "https://media.istockphoto.com/id/1283701750/photo/power-banks-for-charging-up-your-phone-on-the-go.webp?a=1&b=1&s=612x612&w=0&k=20&c=-PG4L6WdeQde-Iekm1oSBfoQrxQoB3_MAyPasKS9tjA=",
  ;

  return (
<div className="text-center bg-gray-100 py-12">
  <div className="p-6 md:p-12">
    <p className="text-sm md:text-lg">Discover luxurious and high-quality items for the best discounts</p>
    <h1 className="pb-6 font-bold text-2xl md:text-5xl">Categories</h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4 md:px-16">
    {images.map((image, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row  items-center bg-white shadow-lg overflow-hidden"
      >
        {/* Text Section */}
        <div className="flex-1 p-6 text-left">
          <h2 className="text-2xl font-bold mb-2">{image.name}</h2>
          <p className="text-gray-600 mb-4">{image.desc}</p>
          <a
            href="#"
            className="text-blue-500 font-semibold underline hover:text-blue-700"
          >
            Shop Now
          </a>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2">
        <div className='p-4'>
          <img
            src={image.Url}
            alt={image.name}
            className="w-full h-48 md:h-40 object-cover rounded-md"
          />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  
  
  );
}

export default Categories;
