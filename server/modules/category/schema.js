const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type:String,
        required:true,
        unique:true
    }
    // description:String
})

module.exports =categorySchema