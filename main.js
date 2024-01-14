const express = require('express')
const createHttpErrors = require('http-errors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session');
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash')
const mongodbsession = require('connect-mongodb-session')(session)


require('dotenv').config() 
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));
app.set('view engine' , 'ejs')



mongoose.connect("Sir/Ma'am , paste your link here").then(()=>{
    console.log('connected')
    app.listen(PORT , (err)=>{
        if(err) {
            console.log(err)
        }
        else{
            console.log(`port ${PORT} in running`) 
        }
    })
}).catch((err)=>{
    console.log(err)
})

const store = new mongodbsession({
    uri :"Sir/Ma'am , paste your link here",
    collection : "Cookie-Session"

})

app.use(session({
    secret : 'helloWorld',
    resave : false,
    saveUninitialized : false,
    store : store
}))


app.use(connectFlash())

app.use(morgan('dev')) 



app.use('/' , require('./routes/index'));
app.use('/auth', require('./routes/auth'))
app.use('/user' , require('./routes/user'))



app.use((req , res , next)=>{
    next(createHttpErrors.NotFound())
})



app.use((error , req , res , next)=>{
    error.status = error.status || 500
    res.status(error.status).send(error);

})




