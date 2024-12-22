const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/authRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const reportRoutes = require('./Routes/reportRoutes');
const userRoutes = require('./Routes/userRoutes');
const { errorHandler } = require('./Middleware/errorMiddleware');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/reports', reportRoutes);
app.use('/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Default Route
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
