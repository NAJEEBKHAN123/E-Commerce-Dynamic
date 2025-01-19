import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/Slice/cartSlice';
import { fetchAllProducts } from '../../Redux/Service/apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); // Tracks the current route
  const dispatch = useDispatch(); // For dispatching actions

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        console.log('Fetched Products:', data); // Debugging line
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [location]); // Refetch whenever the route changes

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Ensure product has a unique _id field
  };

  return (
    <div>
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <p className="text-gray-600 mt-2">Find the best products at unbeatable prices!</p>
      </section>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-16">
          {products.map((product) => (
            <div key={product._id}>
              <div className="w-72 h-auto rounded-md p-4 bg-gray-200 border border-black">
                <h1 className="text-2xl">{product.title}</h1>
                <p>Brand: {product.brand}</p>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.image || 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5fGVufDB8fDB8fHww'} alt={product.title} className="w-full h-40 object-cover" />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
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
