const express = require('express');
const Book = require('./Book');

const router = express.Router();

// Додати книгу
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Отримати всі книги
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;