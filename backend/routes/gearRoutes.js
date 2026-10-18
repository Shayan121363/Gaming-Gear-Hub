const express = require('express');
const router = express.Router();
const Gear = require('../models/Gear');

// Get all gear
router.get('/', async (req, res) => {
  try {
    const gear = await Gear.find();
    res.json(gear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get gear by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Gear.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Gear not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new gear (Admin)
router.post('/', async (req, res) => {
  try {
    const newGear = new Gear(req.body);
    const savedGear = await newGear.save();
    res.status(201).json(savedGear);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete gear (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const deletedGear = await Gear.findByIdAndDelete(req.params.id);
    if (deletedGear) {
      res.json({ message: 'Gear deleted successfully' });
    } else {
      res.status(404).json({ message: 'Gear not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
