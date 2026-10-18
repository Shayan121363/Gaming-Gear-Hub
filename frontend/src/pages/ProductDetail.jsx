import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/gear/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loader-container"><span className="loader"></span></div>;
  }

  if (!product) {
    return <div className="container section" style={{ textAlign: 'center' }}><h2>Product not found</h2></div>;
  }

  return (
    <div className="container section">
      <button 
        onClick={() => navigate('/gear')}
        className="btn-outline"
        style={{ marginBottom: '2rem', padding: '0.5rem 1rem', border: 'none' }}
      >
        <ArrowLeft size={16} /> Back to Store
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}
        >
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <span className="badge" style={{ position: 'static', display: 'inline-block', width: 'max-content', marginBottom: '1rem', backgroundColor: 'var(--color-bg-tertiary)' }}>
            {product.category}
          </span>
          <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{product.name}</h1>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-primary)', marginBottom: '1.5rem' }}>
            ${product.price}
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
              <Truck size={20} color="var(--color-accent-primary)" /> Free Shipping
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
              <ShieldCheck size={20} color="var(--color-accent-primary)" /> 2 Year Warranty
            </div>
          </div>

          <button 
            onClick={() => navigate('/checkout', { state: { amount: product.price, itemName: product.name } })}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem', fontSize: '1.2rem' }}
          >
            <ShoppingCart size={24} /> Proceed to Checkout
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
