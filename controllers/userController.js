const db = require('../db/connection');

// Mendapatkan semua pengguna (Admin-only)
exports.getAllUsers = (req, res) => {
    const query = 'SELECT id, username, role FROM users';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching users' });
        res.json(results);
    });
};

// Mendapatkan detail pengguna berdasarkan ID (Admin-only)
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT id, username, role FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    });
};
