import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;
//middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
//serve static files in the entire client's dist folder
app.use(express.static('../client/dist'));
//routes
app.use(routes);
// Error handling middleware
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('middleware error');
});
//database synchronisation and server start
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
