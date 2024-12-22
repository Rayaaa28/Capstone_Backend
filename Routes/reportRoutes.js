const express = require('express');
const { getLowStockBooks, getBooksSummary } = require('../controllers/reportController');
const { authMiddleware } = require('../Middleware/authMiddleware');

const router = express.Router();

// Endpoint laporan dengan otentikasi
router.get('/lowstock', authMiddleware, getLowStockBooks);
router.get('/summary', authMiddleware, getBooksSummary);

module.exports = router;
