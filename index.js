// Import required modules
const express = require('express');
const mysql = require('mysql');

// Initialize the Express application
const app = express();

// Set up the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'henrik',
    password: 'letmein',
    database: 'acme'
});

// Connect to the database
db.connect();

// Define a route to get user data
app.get('/users', (req, res) => {
    // SQL query to select user data
    const sql = 'SELECT first_name, last_name, email FROM users ORDER BY last_name';
    
    // Execute the query
    db.query(sql, (err, result) => {
        if (err) throw err; // Handle errors
        res.send(result); // Send the result as the response
    });
});

// Start the server on port 5000
app.listen('5000', () => console.log('Server started on http://localhost:5000'));