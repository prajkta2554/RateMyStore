// app.js
const express = require('express');
const app = express();

// Built-in middleware to parse JSON requests
app.use(express.json());

// Simple test route to check server
app.get('/', (req, res) => {
  res.send('API server is running');
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
