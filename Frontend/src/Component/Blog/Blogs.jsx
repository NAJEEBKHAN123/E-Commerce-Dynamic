import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([])
  const navigate =  useNavigate()

  useEffect(() =>{
    const fetchBlogs = async() =>{
        try {
          const response = await fetch("https://fakestoreapi.com/products")
          const jsonData = await response.json()
          setBlogs(jsonData.slice(0, 15))
          // setBlogs(jsonData)
        } catch (error) {
          console.log("error fetching fake apis", error)
        }
    }
    fetchBlogs()
  }, [])

  const handleReadMore = (blog) =>{
    navigate(`/quickview/${blog}`, {state: blog})
  }

  
  return (
    <div className="px-12 py-10">
    <h1 className="text-3xl font-bold text-center mb-6">Discover the Latest Tech</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={blog.image ||
              'https://plus.unsplash.com/premium_photo-1737743862655-6260a8dcb4c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
         
            }
            alt={blog.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600 truncate">{blog.category}</p>
            <p className="text-gray-600 truncate">{blog.description}</p>
            <p className="text-gray-600 truncate">{blog.price}$</p>

            <button
              onClick={() => handleReadMore(blog)}
              className="text-blue-500 mt-2 hover:underline"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Blog;
