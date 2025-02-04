import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {fetchProductById} from '../../Redux/Service/apiService'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../Redux/Slice/cartSlice'

function QuickView() {
    const {id} = useParams()

    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        const fetchProduct = async () =>{
            try {
                const data = await fetchProductById(id)
                setProduct(data)
            } catch (error) {
                console.error("Error fetching product details:", error)
            }
        }
        fetchProduct()
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>;
      }
      const handleBackToCart = () =>{
        navigate('/products')
      }

    const  handleAddToCart = () => {
        dispatch(addItemToCart(product))
        console.log('handle add to cart')
    }
    
  return (
    <div className="p-8">
      <img
        src={product.image || 
          "https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5fGVufDB8fDB8fHww"
        }
        alt={product.title}
        className="w-96 h-96 object-cover rounded-md mb-4"
      />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong>  {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
     
       <div className='flex gap-6'>
       <button onClick={() => handleBackToCart()} className='px-16 py-2 bg-blue-600 rounded-md text-xl font-semibold text-white'>Back</button>
       <button onClick={handleAddToCart} className='px-10  py-2 bg-blue-600 rounded-md text-xl font-semibold text-white'>Add to Cart</button>
       </div>
    </div>
  )
}

export default QuickView
