const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW()', (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    res.send(`Database time: ${results[0]['NOW()']}`);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
