const forceDatabaseRefresh = false;
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { authenticateToken } from './middleware/auth.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(express.json());
// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
// Use the authenticateToken middleware for protected routes
app.use('/api/protected', authenticateToken, routes);
// Routes
app.use(routes);
// Error handling middleware
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Database synchronization and server start
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
