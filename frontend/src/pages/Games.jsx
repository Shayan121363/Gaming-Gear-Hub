import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/games`);
        const data = await response.json();
        // Just take the first 20 games for performance/display
        setGames(data.slice(0, 20));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <h1 style={{ marginBottom: '1rem' }}>Free-To-Play Library</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>Discover the best free games available right now.</p>
      </motion.div>

      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {games.map((game, index) => (
            <motion.div 
              key={game.id} 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="card-img-wrapper">
                <span className="badge">{game.genre}</span>
                <img src={game.thumbnail} alt={game.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{game.title}</h3>
                <p className="card-desc">{game.short_description}</p>
                <div className="card-footer">
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{game.platform}</span>
                  <a href={game.game_url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                    Play Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
