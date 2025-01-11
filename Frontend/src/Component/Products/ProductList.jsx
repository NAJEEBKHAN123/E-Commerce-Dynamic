import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAllProducts } from '../../Redux/Service/apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); // Tracks the current route

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

  return (
    <div>
        <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <p className="text-gray-600 mt-2">Find the best products at unbeatable prices!</p>
      </section>
      <div>
        <ul className="flex flex-row flex-wrap gap-4 p-4">
          {products.map((product) => (
            <li key={product._id}>
              <div className="w-72 min-h-40 rounded-md p-4 bg-gray-200 border border-black">
                <h1 className="text-2xl">Title: {product.title}</h1>
                <p>Brand: {product.brand}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
