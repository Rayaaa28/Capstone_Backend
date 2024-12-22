const db = require('../db/connection');

exports.getAllBooks = (req, res) => {
    const query = 'SELECT * FROM books';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching books' });
        res.json(results);
    });
};

exports.getBookById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM books WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: 'Book not found' });
        res.json(results[0]);
    });
};

exports.createBook = (req, res) => {
    const { title, author, published_year, genre, quantity } = req.body;

    const query = 'INSERT INTO books (title, author, published_year, genre, quantity) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [title, author, published_year, genre, quantity], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error creating book' });
        res.status(201).json({ message: 'Book created successfully' });
    });
};

exports.updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author, published_year, genre, quantity } = req.body;

    const query = 'UPDATE books SET title = ?, author = ?, published_year = ?, genre = ? , created_at = CURRENT_TIMESTAMP, quantity = ? WHERE id = ?';
    db.query(query, [title, author, published_year, genre, quantity, id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error updating book' });
        res.json({ message: 'Book updated successfully' });
    });
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM books WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error deleting book' });
        res.json({ message: 'Book deleted successfully' });
    });
};
