const multer = require("multer");

const storage = multer.diskStorage({
    destination : function (req , file , cb) {
        return cb(null , "./uplodes/") 

    } , filename : function (req , file , cb) {
        return cb(null , `${Date.now()}/${file.originalname} ` )

    }
})

const uplode = multer(storage)

module.exports = uplode