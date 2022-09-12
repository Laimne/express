const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ruo_nei_ka",
});

app.get('/', (req, res) => {
    res.send('Labas, Bebrai!')
});

app.get('/ate', (req, res) => {
    res.send('Ate, Bebrai!')
});

app.get('/super/cool', (req, res) => {
    res.send('1234546')
});

app.listen(port, () => {
    console.log(`Bebras klauso ${port} porto!`)
});