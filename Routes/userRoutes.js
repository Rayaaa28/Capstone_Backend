const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../Middleware/authMiddleware');

const router = express.Router();

// Endpoint pengguna untuk admin
router.get('/', authMiddleware, isAdmin, getAllUsers);
router.get('/:id', authMiddleware, isAdmin, getUserById);

module.exports = router;
