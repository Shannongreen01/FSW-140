const express = require('express')
const playersRouter = express.Router()

const bin  = require('decode-encode-binary')


const db = mysql.createConnection ({
    user: 'root',
    password:'AlexandRaylan12!@',
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
playersRouter.route('/').get((req, res) => {

let sql = 'select * from players;'

db.query(sql, (err, results) =>{
if(err){throw err}
res.send(results)})})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
playersRouter.route('/:playerId').get((req, res) => {
    let playerId = req.params.playerId
    let sql = `select * from players WHERE _id='${playerId}';`
    
    
    db.query(sql, (err, results) =>{
    if(err){throw err}
    res.send(results)})})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

playersRouter.route('/').post((req, res) =>{
    
    let fname = req.body.first_name
    let lname = req.body.last_name
    let active = ''
    if(req.body.active === 'false'){active = 0 }else {active = 1}
    let teams = req.body.teams
    let jersey = req.body.jersey
    let sb = req.body.rings
    let sql =`insert into players(first_name, last_name, active_status, teams, jersey, sb_rings) values( 
    '${fname}','${lname}',${active}, '${teams}', ${jersey}, ${sb} )`

    db.query(sql, (err, results) =>{
        if(err){
            throw err 
        } res.send(results)
        console.log(results)
        
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



playersRouter.route('/:playerId').put((req, res) =>{
let id = req.params.playerId
let fName = req.body.first_name
let lName = req.body.last_name
let active = ''
if(req.body.active === 'false'){
    active = 0
}else {
    active = 1
}
let teams = req.body.teams
let jersey = req.body.jersey
let sb = req.body.rings
    let sql = `UPDATE players SET first_name ='${fName}', last_name ='${lName}', active_status =${active}, teams ='${teams}', jersey =${jersey}, sb_rings =${sb} WHERE _id = '${id}'`

    db.query(sql, (err, results) =>{
        if(err){
            throw err
        }
        res.send(results).status(201)
        console.log(req.body)
        console.log(req.params.playerId)
    
        
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    playersRouter.route('/:playerId').delete((req,res)=> {
        let id = req.params.playerId
        let sql = `DELETE FROM players WHERE _id = '${id}'`  

        db.query(sql, (err, results) =>{
             if(err){
                 throw err
             } res.send(results)
             
        })

    })



module.exports = playersRouter