const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const studentSchema = new Schema ({
    name:{
        type:String
    },
    id:{
        type:String
        
    },
    subject: {
        type:String
    },
    teacher:{
        type : String
    },  
    time: {
        type : String
        
    },
}, {timestamps:true})
const studentModel = mongoose.model('Student', studentSchema)
module.exports=studentModel