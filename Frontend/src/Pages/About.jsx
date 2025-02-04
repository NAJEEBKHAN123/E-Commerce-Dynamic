import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      
      {/* Intro Paragraph */}
      <p className="text-lg leading-relaxed mb-6">
        Welcome to our website! We are a company dedicated to providing the best products and services to our customers. 
        Our mission is to deliver high-quality products at affordable prices. 
        We are committed to customer satisfaction and continuous improvement.
      </p>
      
      {/* Vision Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Vision</h2>
      <p className="text-lg leading-relaxed mb-6">
        To be the leading provider of innovative products and services that enhance the lives of our customers.
      </p>
      
      {/* Values Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Values</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
        <li>Quality</li>
      </ul>
    </div>
  );
};

export default About;
