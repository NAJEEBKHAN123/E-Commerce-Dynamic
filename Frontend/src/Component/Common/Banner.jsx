import React from 'react';

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[500px] flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1667520427933-899f4c8eb107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBzaG9wJTIwaG9tZSUyMGltYWdlcyUyMHJlbGF0ZWQlMjB0byUyMHdhdGNoJTIwYW5kJTIwbW9iaWxlJTIwd2l0aCUyMGdpcmx8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="text-center text-white relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to E-Shop</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the best deals and products tailored just for you!!
        </p>
        <div className="space-x-4">
          <a
            href="/products"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-800 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
