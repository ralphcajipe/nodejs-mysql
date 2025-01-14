const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'henrik',
    password: 'letmein',
    database: 'acme'
});

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT first_name, last_name, email FROM users ORDER BY last_name';
    
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen('5000', () => console.log('Server started on http://localhost:5000'));

