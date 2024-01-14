const mongoose = require('mongoose')
const subjectSchema = new mongoose.Schema({
    name: String,
    marks: Number,
  });

  const studentSchema = new mongoose.Schema({
    name: String,
    batch : String,
    registrationNumber: String, 
    semester : String,
    subjects: [subjectSchema],
  }); 
 

const StudentData = mongoose.model('Student', studentSchema);


module.exports = StudentData;



