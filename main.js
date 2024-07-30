import mongoose from "mongoose";
import dotenv from "dotenv";
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes.js';
import route from './routes/routes.js';
import connectDB from './connectDB/connectDB.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup for serving static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Setup for ejs template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/items', itemRoutes); // Assuming itemRoutes handle paths related to items
app.use('/', route); // Main routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
