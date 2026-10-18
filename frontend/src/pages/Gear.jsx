import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gear = () => {
  const [gear, setGear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [externalGear, setExternalGear] = useState([]);
  const [loadingExternal, setLoadingExternal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGear = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/gear`);
        const data = await response.json();
        setGear(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gear:', error);
        setLoading(false);
      }
    };

    const fetchExternalGear = async () => {
      try {
        // Integrating with external store API using an API key from our .env file
        const [laptopsRes, accessoriesRes] = await Promise.all([
          fetch('https://dummyjson.com/products/category/laptops?limit=4', {
            headers: {
              'x-api-key': import.meta.env.VITE_EXTERNAL_STORE_API_KEY || 'default_key',
              'Authorization': `Bearer ${import.meta.env.VITE_EXTERNAL_STORE_API_KEY}`
            }
          }),
          fetch('https://dummyjson.com/products/category/mobile-accessories?limit=4', {
            headers: {
              'x-api-key': import.meta.env.VITE_EXTERNAL_STORE_API_KEY || 'default_key',
              'Authorization': `Bearer ${import.meta.env.VITE_EXTERNAL_STORE_API_KEY}`
            }
          })
        ]);
        const laptopsData = await laptopsRes.json();
        const accessoriesData = await accessoriesRes.json();
        const combined = [...(laptopsData.products || []), ...(accessoriesData.products || [])];
        setExternalGear(combined);
        setLoadingExternal(false);
      } catch (error) {
        console.error('Error fetching external gear:', error);
        setLoadingExternal(false);
      }
    };

    fetchGear();
    fetchExternalGear();
  }, []);

  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <h1 style={{ marginBottom: '1rem' }}>Pro Gaming Gear</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>Elevate your gameplay with industry-leading peripherals.</p>
      </motion.div>

      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {gear.map((item, index) => (
            <motion.div 
              key={item._id} 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-img-wrapper" onClick={() => navigate(`/gear/${item._id}`)} style={{ cursor: 'pointer' }}>
                <span className="badge" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>{item.category}</span>
                <img src={item.imageUrl} alt={item.name} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title" onClick={() => navigate(`/gear/${item._id}`)} style={{ cursor: 'pointer' }}>{item.name}</h3>
                <p className="card-desc">{item.description}</p>
                <div className="card-footer">
                  <span className="price">${item.price}</span>
                  <button onClick={() => navigate(`/gear/${item._id}`)} className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* External Partner Products Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Partner Store Deals</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Products fetched directly from our external partner API using secure API key integration.
        </p>
      </motion.div>

      {loadingExternal ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {externalGear.map((item, index) => (
            <motion.div 
              key={`ext-${item.id}`} 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ border: '1px solid var(--color-primary)' }}
            >
              <div className="card-img-wrapper">
                <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#000', fontWeight: 'bold' }}>Partner</span>
                <img src={item.thumbnail} alt={item.title} className="card-img" style={{ objectFit: 'contain', backgroundColor: '#fff' }} />
              </div>
              <div className="card-content">
                <h3 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h3>
                <p className="card-desc" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                <div className="card-footer">
                  <span className="price">${item.price}</span>
                  <button onClick={() => window.open(`https://dummyjson.com/products/${item.id}`, '_blank')} className="btn-primary" style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                    View Partner
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gear;
