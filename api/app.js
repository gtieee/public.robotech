const express = require('express');
const path = require('path');
const { Pool, Client } = require('pg');
const hash = require('/utils/hash.js');
require ('dotenv').config();
var app = express();

const db = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
}

const pool = new Pool(db);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV == 'development') {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/register.html'));
    });
}

app.post('/api/register', async (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var pass = req.body.password;
    res.status(200).redirect('/');
    //implement hashing function
    console.log(hash(pass));

    //const pool = new Pool(db);
    //const response = await pool.query("SELECT email FROM data.users;");
})

async function test() {
    
    console.log(response.rows);
}

app.listen(500);