import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createNewProduct, updateExistingProduct, fetchProductById } from '../../Redux/Service/apiService';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    images: [],
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const product = await fetchProductById(id);
          setFormData(product);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateExistingProduct(id, formData);
      } else {
        await createNewProduct(formData);
      }
      navigate('/products');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">{id ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
