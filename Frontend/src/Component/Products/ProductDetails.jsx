import React from "react";
import {  useNavigate, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Luxury Watch",
    relatedImages: [
      { id: 1, url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=300", price: 12000, desc: "Elegant and timeless design." },
      { id: 2, url: "https://images.unsplash.com/photo-1626793167849-9d7c65d0932d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww", price: 11500, desc: "Premium materials for durability." },
      { id: 3, url: "https://images.unsplash.com/photo-1631863552122-3072cf599a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww", price: 11000, desc: "Sophisticated craftsmanship." },
      { id: 4, url: "https://plus.unsplash.com/premium_photo-1681336999719-cb51ea71fa43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww", price: 10500, desc: "Perfect for any occasion." },
      { id: 5, url: "https://images.unsplash.com/photo-1627094522148-ac0c843a1383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D", price: 10000, desc: "A blend of style and functionality." },
      { id: 6, url: "https://images.unsplash.com/photo-1486303394622-2e168a275e36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww", price: 9500, desc: "Luxurious and reliable." },
      { id: 7, url: "https://plus.unsplash.com/premium_photo-1682432938373-fce83790d51f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww", price: 9000, desc: "Classic appeal for all ages." },
      { id: 8, url: "https://media.istockphoto.com/id/1157775252/photo/young-woman-checking-the-sports-watch-measuring-heart-rate-and-performance-after-running.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZgC43AS3xqhTpjAcM9sX7hbKnOmxB_JCsQLH2Zipixc=", price: 8500, desc: "Timeless elegance." },
      
    ],
  },
  {
    id: 2,
    name: "Smartphone",
    relatedImages: [
      { id: 9, url: "https://images.unsplash.com/photo-1574763788197-1808b6ac8142?w=300&h=300", price: 85000, desc: "Cutting-edge technology." },
      { id: 10, url: "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", price: 82000, desc: "High-performance processor." },
      { id: 11, url: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwbW9iaWxlfGVufDB8fDB8fHww", price: 80000, desc: "Sleek and stylish design." },
      { id: 12, url: "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bXN1bmclMjBtb2JpbGV8ZW58MHx8MHx8fDA%3D", price: 78000, desc: "Advanced camera system." },
      { id: 13, url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D", price: 75000, desc: "Long-lasting battery life." },
      { id: 14, url: "https://images.unsplash.com/photo-1727093493751-73e913a3dd82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D", price: 73000, desc: "Vibrant display." },
      { id: 15, url: "https://images.unsplash.com/photo-1736102790521-dac1502db9ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D", price: 70000, desc: "Seamless connectivity." },
      { id: 16, url: "https://images.unsplash.com/photo-1727079516633-04d51a733033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww", price: 68000, desc: "Lightweight and durable." },
    ],
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    relatedImages: [
      {id:17, url: "https://media.istockphoto.com/id/1830748183/photo/bluetooth-earbuds-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FwtmpTKWKDNVq2pLxg4t8LDtT0NO6lFxUBtW08S7-vU=", price: 7000, desc: "High-quality sound." },
      {id:18, url: "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww", price: 6500, desc: "Comfortable fit for long hours." },
      {id:19, url: "https://images.unsplash.com/photo-1648447272271-1c2292144c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdpcmVsZXNzJTIwRWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D", price: 6000, desc: "Compact and portable." },
      {id:20, url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D", price: 5800, desc: "Modern and stylish design." },
      {id:21, url: "https://images.unsplash.com/photo-1590658058105-af4b65f8871b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D", price: 5600, desc: "Noise-cancellation feature." },
      {id:22, url: "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVhcmJ1ZHxlbnwwfHwwfHx8MA%3D%3D", price: 5400, desc: "Water-resistant build." },
      {id:23, url: "https://images.unsplash.com/photo-1695634463685-f33de618517d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpcmVsZXNzJTIwZWFyYmlyZHN8ZW58MHx8MHx8fDA%3D", price: 5200, desc: "Long battery life." },
      {id:24, url: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpcmVsZXNzJTIwZWFyYmlyZHN8ZW58MHx8MHx8fDA%3D", price: 5000, desc: "Seamless connectivity." },
    ],
  },
  {
    id: 4,
    name: "High-Performance Laptop",
    relatedImages: [
      {id:25, url: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 150000, desc: "Powerful performance for professionals." },
      {id:26, url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 140000, desc: "Perfect for gaming and work." },
      {id:27, url: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 130000, desc: "Lightweight and portable." },
      {id:28, url: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 125000, desc: "Long-lasting battery life." },
      {id:29, url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 120000, desc: "Crystal-clear display." },
      {id:30, url: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 115000, desc: "Advanced cooling system." },
      {id:31, url: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 110000, desc: "Seamless multitasking." },
      {id:32, url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", price: 100000, desc: "Enhanced security features." },
    ],
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const navigate = useNavigate()

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }
 
  const handleImageClick = (image) =>{
    navigate(`/image-details/${image.id}`, {state: image})
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center p-6 text-5xl font-bold">
        <h1>{product.name}</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-16">
        {product.relatedImages.map((image, index) => (
          <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
          onClick={ () => handleImageClick(image)}>
            <img src={image.url} alt={`Related ${product.name}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Price: {image.price} $</h2>
              <p className="text-gray-600">{image.desc}</p>
             
                 See Details
            </div>
         
          
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default ProductDetails;
