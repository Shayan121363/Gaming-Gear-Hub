require('dotenv').config();
const mongoose = require('mongoose');
const Gear = require('./models/Gear');

const sampleGear = [
  {
    name: 'Logitech G Pro X Superlight',
    description: 'Zero opposition lightweight esports mouse. Designed with pros, engineered to win. Less than 63 grams with hyper-fast slipstream technology.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&q=80',
    category: 'Mouse',
    stock: 20
  },
  {
    name: 'SteelSeries Apex Pro TKL',
    description: 'World\'s fastest mechanical gaming keyboard. OmniPoint 2.0 adjustable hypermagnetic switches with OLED smart display.',
    price: 189.99,
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
    category: 'Keyboard',
    stock: 15
  },
  {
    name: 'HyperX Cloud II Wireless',
    description: 'Legendary comfort goes wireless. 7.1 surround sound, memory foam ear cushions, and an impressive 30-hour battery life.',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80',
    category: 'Headset',
    stock: 30
  },
  {
    name: 'Alienware AW2524H 500Hz',
    description: 'The world\'s first 500Hz IPS gaming monitor. 24.5-inch FHD display with NVIDIA G-SYNC and ultra-low latency.',
    price: 829.99,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    category: 'Monitor',
    stock: 5
  },
  {
    name: 'Secretlab TITAN Evo',
    description: 'Award-winning comfort for the most demanding gamers. Cold-cure foam mix with integrated 4-way L-ADAPT lumbar support.',
    price: 549.00,
    imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
    category: 'Chair',
    stock: 10
  },
  {
    name: 'Xbox Elite Wireless Controller Series 2',
    description: 'Play like a pro with the world\'s most advanced controller. Adjustable-tension thumbsticks and interchangeable components.',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&q=80',
    category: 'Controller',
    stock: 25
  },
  {
    name: 'Shure SM7B Vocal Microphone',
    description: 'Legendary vocal microphone for podcasting, streaming, and gaming. Excellent shielding against electromagnetic hum.',
    price: 399.00,
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
    category: 'Microphone',
    stock: 8
  },
  {
    name: 'Razer Goliathus Extended Chroma',
    description: 'Soft gaming mouse mat with Razer Chroma RGB. Micro-textured cloth surface for speed and control playstyles.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=800&q=80',
    category: 'Accessory',
    stock: 50
  },
  {
    name: 'Corsair K70 RGB PRO Mechanical Keyboard',
    description: 'Iconic aluminum frame with durable CHERRY MX mechanical switches, 8,000Hz hyper-polling AXON technology, and per-key RGB backlighting.',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    category: 'Keyboard',
    stock: 18
  },
  {
    name: 'Sony INZONE H9 Wireless Gaming Headset',
    description: 'Noise canceling spatial audio gaming headset with 360 spatial sound for gaming, dual sensor noise canceling, and personal equalizer.',
    price: 279.99,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    category: 'Headset',
    stock: 14
  },
  {
    name: 'Elgato Stream Deck MK.2',
    description: '15 customizable LCD keys to control apps and platforms. One-touch tactile operation with visual feedback for seamless broadcasting and gaming.',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80',
    category: 'Accessory',
    stock: 22
  },
  {
    name: 'SteelSeries Aerox 3 Wireless Ghost Edition',
    description: 'Ultra-lightweight 68g honeycomb design optimized for fast gaming swipes with AquaBarrier water protection and brilliant RGB illumination.',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800&q=80',
    category: 'Mouse',
    stock: 25
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await Gear.deleteMany({});
    await Gear.insertMany(sampleGear);
    console.log('Data seeded successfully!');
    process.exit();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    process.exit(1);
  });
