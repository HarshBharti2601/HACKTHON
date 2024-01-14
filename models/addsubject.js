const SubSchmea = require("./subject");


async function AddSubject(req , res , next) {

    let subject = req.body.subjectName
    let credits = req.body.totalCredits

    await SubSchmea.create({
        name : subject , credits : credits
    })

    next();  

}

module.exports = AddSubject;