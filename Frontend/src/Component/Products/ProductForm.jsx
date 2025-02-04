import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createNewProduct,
  updateExistingProduct,
  fetchProductById,
} from "../../Redux/Service/apiService";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    images: [], // Store images
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const product = await fetchProductById(id);
          setFormData({
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            images: product.images || [], // Handle existing images
          });
        } catch (err) {
          setError("Error fetching product.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("brand", formData.brand);
      if (imageFile) data.append("image", imageFile); // Add image file

      if (id) {
        await updateExistingProduct(id, data); // Update product
      } else {
        await createNewProduct(data); // Create new product
      }
      navigate("/products");
    } catch (err) {
      setError("Error saving product.");
    } finally {
      setLoading(false);
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
      <input
        type="text"
        placeholder="Brand"
        value={formData.brand}
        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        required
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : id ? "Update Product" : "Add Product"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display uploaded images */}
      {formData.images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {formData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:5000${image.url }`} // Adjust base URL as needed
                  alt={image.altText || "Uploaded image"}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default ProductForm;
