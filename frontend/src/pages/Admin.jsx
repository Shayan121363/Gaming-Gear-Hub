import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, PlusCircle } from 'lucide-react';

const Admin = () => {
  const [gear, setGear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', imageUrl: '', category: '', stock: ''
  });

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

  useEffect(() => {
    fetchGear();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/gear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({ name: '', description: '', price: '', imageUrl: '', category: '', stock: '' });
        fetchGear(); // Refresh list
      }
    } catch (error) {
      console.error('Error adding gear:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/gear/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchGear(); // Refresh list
      }
    } catch (error) {
      console.error('Error deleting gear:', error);
    }
  };

  return (
    <div className="container section">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
        <h1>Admin Dashboard</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>Manage your gaming gear inventory.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
        
        {/* Add Product Form */}
        <div style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)', alignSelf: 'start' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PlusCircle size={20} color="var(--color-accent-primary)"/> Add New Product
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input name="price" type="number" placeholder="Price ($)" value={formData.price} onChange={handleChange} required style={inputStyle} />
            <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required style={inputStyle} />
            <input name="imageUrl" placeholder="Image URL (Unsplash)" value={formData.imageUrl} onChange={handleChange} required style={inputStyle} />
            <input name="stock" type="number" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required style={inputStyle} />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} />
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Add Product</button>
          </form>
        </div>

        {/* Product List */}
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Current Inventory</h3>
          {loading ? <div className="loader"></div> : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {gear.map((item) => (
                <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0 }}>{item.name}</h4>
                      <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>${item.price} | Stock: {item.stock}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(item._id)} style={{ background: 'transparent', border: 'none', color: '#e63946', cursor: 'pointer', padding: '0.5rem' }}>
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: '6px',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg-tertiary)',
  color: 'var(--color-text-primary)',
  fontFamily: 'inherit'
};

export default Admin;
