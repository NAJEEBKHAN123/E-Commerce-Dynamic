import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Slice/cartSlice";
import { fetchAllProducts } from "../../Redux/Service/apiService";
import "../../App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        console.log("Fetched Products:", data); 
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [location]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleCartDetails = (product) =>{
    navigate(`/quickview/${product._id}`)
  }
  
  const backendUrl = "http://localhost:5000";
  return (
    <div>
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <p className="text-gray-600 mt-2">
          Find the best products at unbeatable prices!
        </p>
      </section>
      <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 productList">
  {products.map((product) => (
    <div
      key={product._id}
      className="flex flex-col w-full max-w-sm mx-auto h-auto rounded-md bg-gray-200 border border-black overflow-hidden"
    >
      <div className="relative group">
        <img
           src={product.image ? `${backendUrl}/uploads/${product.image}` : "https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5fGVufDB8fDB8fHww"}
          alt={product.title}
          className="w-full h-60 object-cover rounded-md image"
        />
        <button
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-gray-400 bg-opacity-100 text-white text-lg font-semibold w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => handleCartDetails(product)}
        >
          Quick View
        </button>
      </div>

      <div className="p-4 sm:p-6">
        <h1 className="text-xl font-bold truncate">{product.title}</h1>
        <p className="truncate">Brand: {product.brand}</p>
        <p className="truncate">Description: {product.description}</p>
        <p className="truncate">Price: ${product.price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 w-full addtocart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ProductList;
