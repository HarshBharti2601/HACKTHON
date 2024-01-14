const StudentData = require("./studentdata");

async function findStudent(req , res , next) {

    let regno = req.body.registrationNumber

    let findStudent = await StudentData.findOne({
        registrationNumber : regno

    })

    if(findStudent) {
       res.send('Registration Number already Taken')
       return
    }

    else{
        next()
    }



}

module.exports = findStudent;