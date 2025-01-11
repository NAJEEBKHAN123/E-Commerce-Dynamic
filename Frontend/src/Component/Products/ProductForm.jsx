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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const product = await fetchProductById(id);
          setFormData(product);
        } catch (error) {
          setError('Error fetching product.');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      if (id) {
        await updateExistingProduct(id, formData);
      } else {
        await createNewProduct(formData);
      }
      navigate('/products');
    } catch (error) {
      setError('Error saving product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Brand:</label>
        <input
          type="text"
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
      </div>
      <div>
        <label>Images:</label>
        <input
          type="text"
          placeholder="Image URLs (comma-separated)"
          value={formData.images.join(',')}
          onChange={(e) =>
            setFormData({ ...formData, images: e.target.value.split(',') })
          }
        />
      </div>
      {loading ? (
        <button type="button" disabled>Loading...</button>
      ) : (
        <button type="submit">{id ? 'Update Product' : 'Add Product'}</button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ProductForm;
