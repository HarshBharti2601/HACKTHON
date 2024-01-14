
const StudentData = require("./studentdata");

async function addStudents(req, res, next) {

    let name = req.body.name
    let batch = req.body.batch
    let registrationNumber = req.body.registrationNumber
    let semester = req.body.registrationNumber

    console.log(name)

   await StudentData.create({
        name , batch , registrationNumber , semester
    })

    next()
    

}





module.exports = addStudents;
