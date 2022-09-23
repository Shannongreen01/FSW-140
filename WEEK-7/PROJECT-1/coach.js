const express = require('express')
const coachRouter = express.Router()
const mysql = require('mysql')



const db = mysql.createConnection ({
    user: 'root',
    password:'AlexandRaylan',
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
coachRouter.route('/').get((req, res) => {

let sql = 'select * from coaches;'

db.query(sql, (err, results) =>{
if(err){throw err}
res.send(results)})})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
coachRouter.route('/:coachId').get((req, res) => {
    let coachId = req.params.coachId
    let sql = `select * from coaches  WHERE _id='${coachId}';`
    
    
    db.query(sql, (err, results) =>{
    if(err){throw err}
    res.send(results)})})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

coachRouter.route('/').post((req, res) =>{
    
    let fname = req.body.first_name
    let lname = req.body.last_name
    let active = ''
    if(req.body.active === 'false'){active = 0 }else {active = 1}
    let teams = req.body.teams
    let rings = req.body.rings
    let sql =`insert into coaches(first_name, last_name, active_status, teams, sb_rings) values( 
    '${fname}','${lname}',${active}, '${teams}', ${rings} )`

    db.query(sql, (err, results) =>{
        if(err){
            console.log(req.body)
            throw err 
        } res.send(results)
        
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



coachRouter.route('/:coachId').put((req, res) =>{
let fName = req.body.first_name
let lName = req.body.last_name
let active = ''
if(req.body.active === 'false'){
    active = 0
}else {
    active = 1
}
let teams = req.body.teams
let rings = req.body.rings

    let sql = `UPDATE coaches SET first_name ='${fName}', last_name ='${lName}', active_status =${active}, teams ='${teams}', sb_rings =${rings} WHERE first_name = '${fName}'`

    db.query(sql, (err, results) =>{
        if(err){
            
            throw err
        }
        res.send(results).status(201)
        console.log(res.data)
        
        
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    coachRouter.route('/:coachId').delete((req,res)=> {
        let id = req.params.coachId
        let sql = `DELETE FROM coaches WHERE _id = '${id}'`  

        db.query(sql, (err, results) =>{
             if(err){
                 throw err
             } res.send(results)
             
        })

    })



module.exports = coachRouter