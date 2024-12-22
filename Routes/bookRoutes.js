const express = require('express');
const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/bookController');
const { authMiddleware, isAdmin } = require('../Middleware/authMiddleware');
const { validateBook } = require('../Middleware/validationMiddleware');

const router = express.Router();

// Endpoint buku dengan otentikasi
router.get('/', authMiddleware, getAllBooks);
router.get('/:id', authMiddleware, getBookById);
router.post('/', authMiddleware, isAdmin, validateBook, createBook);
router.put('/:id', authMiddleware, isAdmin, validateBook, updateBook);
router.delete('/:id', authMiddleware, isAdmin, deleteBook);

module.exports = router;
