
const StudentData = require("./studentdata");
async function addMarks(req , res , next) {
    let registrationNumber = req.body.registrationNumber
    let subject = req.body.subject
    let marks = req.body.marks

    const student = await StudentData.findOne({
        registrationNumber : registrationNumber
    })

    if(!student) {
        return res.send('Student Does Not Exist')
    }
    else{
        student.subjects.push({name : subject , marks : marks})
    }
    await student.save();
    next();

}

module.exports = addMarks;