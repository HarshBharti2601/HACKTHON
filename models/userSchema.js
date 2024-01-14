const mongoose = require('mongoose');

let userSchema = mongoose.model('teacherdatas' , {
    email : String , password : String
})

async function ValidateUser(req , res , next) {

    let email = req.body.email;
    let password = req.body.password;

    console.log(email)
    console.log(password)

    let result = await userSchema.findOne({
        email , password
    })
   console.log(result)

    if(result) {
        req.session.isAuth = true;
        res.redirect('/auth/validuser')
        console.log("hii")
    }

    else{
        res.send('incorrecct details')
    }



}

module.exports = ValidateUser
