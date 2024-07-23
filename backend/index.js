import express from 'express';
import dotenv from 'dotenv';
import { connectUsingMongoose } from './db_config/config.js';
import apiRouter from './src/features/routes/routes.js';

// Configuring .env files used
dotenv.config();

// Creating express server
const app = express();

// JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//using the api routers
app.use('/api/routes',apiRouter);
// Connect to MongoDB and then start the server
const startServer = async () => {
    try {
        await connectUsingMongoose();
        app.listen(3000, () => {
            console.log("Server listening on port 3000");
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
};

startServer();
