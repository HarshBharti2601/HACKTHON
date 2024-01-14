const mongoose = require('mongoose')
const subSchema = new mongoose.Schema({
    name : String , credits : String
  })
const SubSchmea = mongoose.model('subjects' , subSchema)
  module.exports = SubSchmea;
