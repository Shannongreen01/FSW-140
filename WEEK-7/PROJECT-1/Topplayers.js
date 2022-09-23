const express = require('express')
const playersRouter = express.Router()
const mysql = require('mysql')
const bin  = require('decode-encode-binary')


const db = mysql.createConnection ({
    user: 'root',
    password:'Lilbldjr1!',
    server:'localhost',
    port: 3306,
    database:'football'
    
});

db.connect((err) =>{
    if(err){
        throw err
    }
    console.log('DB connection successful')
}
)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
playersRouter.route('/players').get((req, res) => {

let sql = 'select * from players where sb_rings >= 2 ;'

db.query(sql, (err, results) =>{
if(err){throw err}
res.send(results)})})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
playersRouter.route('/coaches').get((req, res) => {
    
    let sql = 'select * from coaches where sb_rings >= 2;'
    
    
    db.query(sql, (err, results) =>{
    if(err){throw err}
    res.send(results)})})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = playersRouter