const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const config = require('mongoose-schema-jsonschema/config');
const sensorSchema = new Schema ({
    temp:{
        type:String
    },
    humidity:{
        type:String,
    }
}, {timestamps:true})
// const jsonSensorSchema = sensorSchema.jsonSchema();
const sensorModel = mongoose.model('Sensor', sensorSchema)
module.exports=sensorModel