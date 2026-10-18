const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    
    const response = await axios.get('https://www.freetogame.com/api/games');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching games:', error.message);
    res.status(500).json({ message: 'Failed to fetch games' });
  }
});

module.exports = router;
