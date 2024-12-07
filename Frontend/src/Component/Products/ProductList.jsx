import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../Redux/Service/apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=''>
      <h1>Product List</h1>
      <div className=''>
      <ul className='flex flex-row flex-wrap gap-4 p-4'>
        {products.map((product) => (
          <li key={product._id} className=''> 
            <div className=' w-72 min-h-40 rounded-md p-4 bg-gray-200 border border-black'>
            <h1 className='text-2xl'>Title: {product.title}</h1>
            <p>Brand: {product.brand}</p>
            <p>Desciption: {product.description}</p>
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
