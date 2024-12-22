const db = require('../db/connection');

// Laporan buku dengan stok di bawah 5
exports.getLowStockBooks = (req, res) => {
    const query = 'SELECT * FROM books WHERE quantity < 5';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching low-stock books' });
        res.json(results);
    });
};

// Laporan ringkasan jumlah buku berdasarkan kategori
exports.getBooksSummary = (req, res) => {
    const query = 'SELECT title, COUNT(*) as total FROM books GROUP BY title;';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching books summary' });
        res.json(results);
    });
};
