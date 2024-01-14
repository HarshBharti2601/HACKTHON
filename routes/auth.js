
const express = require('express')
const ValidateUser = require('../models/userSchema')
const RoutProtect = require('../models/protectrout')
const findStudent = require('../models/protectreg')
const uplode = require('../models/uplode')
const AddSubject = require('../models/addsubject')
const addStudents = require('../models/addThings')
const addMarks = require('../models/addmarks')

const router = express.Router()


router.get('/login' ,(req , res, next)=>{
    res.render('login.ejs')
  
   

})
router.get('/register' , (req , res, next)=>{

    
})
router.post('/login' ,ValidateUser,  (req , res, next)=>{
    
  
    
})
router.post('/register' ,  (req , res, next)=>{
  
})
router.post('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
           
            res.redirect('/auth/login');
        }
    });
});


router.get('/validuser' , RoutProtect, (req , res )=>{
    res.render('dashboard.ejs')
})

router.get('/newstudent' , RoutProtect , addStudents ,(req , res)=>{
    res.render('addstudent.ejs')
    
} )


router.post('/addstudents' , RoutProtect , findStudent , addStudents ,(req , res)=>{
    res.send('student added!')
    
} )


router.get('/addmarks' ,RoutProtect , (req, res)=>{
    res.render('addmarks.ejs')
})

router.post('/addmarks' , RoutProtect , addMarks, (req , res)=>{
    res.send('Marks Added')

})

router.get('/uplode' , RoutProtect , (req , res)=>{
    res.render('uplodeassign.ejs')
})

router.post('/uplode' , RoutProtect , uplode.single("file")  , (req , res)=>{

    console.log(req.file)

    res.send('file has been uploded')
})

router.get('/addsub' , RoutProtect , (req , res)=>{
    res.render('subregister.ejs')
})

router.post('/addsub' , RoutProtect , AddSubject, (req , res)=>{
    res.send("Subject Added Successfully")
})

module.exports = router;