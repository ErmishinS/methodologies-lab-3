const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./books');

const app = express();
app.use(express.json());

// Підключення до MongoDB
mongoose.connect('mongodb://mongo:27017/lab3db', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Маршрути
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});