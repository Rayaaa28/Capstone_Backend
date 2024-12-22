exports.validateBook = (req, res, next) => {
    const { title, author, published_year, genre, quantity } = req.body;

    if (!title || !author || !published_year || !genre || !quantity < 0) {
        return res.status(400).json({ message: 'Invalid book data' });
    }
    next();
};
