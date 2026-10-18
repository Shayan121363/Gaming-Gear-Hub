require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const gearRoutes = require('./routes/gearRoutes');
const gameRoutes = require('./routes/gameRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gear', gearRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/checkout', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Gaming Hub API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

