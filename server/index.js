import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'TrabalhofinalDB-NullBank'
})

app.get('/', (req, res)=>{
    res.json("This message came from back-end")
})

app.listen(8800, ()=>{
    console.log("Connected")
})