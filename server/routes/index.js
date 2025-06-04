// Index.js file for the server-side routes
import express from 'express'; // Importing express framework
const router = express.Router(); // Creating a new router instance

// Test route to check if the server is running
router.get('/', (req, res) => {
  res.status(200).json({ message: 'MacroMate API server is running' }); // Respond with a success message
});

export default router; // Export the router to be used in the main server file