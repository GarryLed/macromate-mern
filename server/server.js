// Main entry point for the server-side 
import express from 'express'; // Importing express framework
import mongoose from 'mongoose'; // Importing mongoose for MongoDB interaction
import dotenv from 'dotenv'; // Importing dotenv for environment variable management
import cors from 'cors'; // Importing CORS middleware for handling cross-origin requests

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an instance of an Express application

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Routes
import routes from './routes/index.js'; // Importing routes from the routes directory
app.use('/api', routes); // Use the imported routes under the /api path

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB')) // Log success message on successful connection
  .catch(err => console.error('MongoDB connection error:', err)); // Log error message on connection failure

// Start the server
const PORT = process.env.PORT || 5000; // Set the port from environment variable or default to 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Log server start message


