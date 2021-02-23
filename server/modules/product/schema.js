const mongoose = require('mongoose')
const Schema = mongoose.Schema

// String, Number, Boolean , Date, Object, Array, ObjectId
const productSchema = new Schema({
    // _id: ObjectId
    title: {
        type: String,
        required: [true, `Yêu câu 'title'!`],
        unique: true,
    },
    image: {
        type: String,
        // required: true
    },
    imgDes: [
        {
            type: String,
        }
    ],
    description: {
        type: String,
        required: true
    },
    sale: String,
    inventory: Number,
    price_old: Number,
    price: {
        type: Number,
        required: true
    },
    categories: [
        {
            type: mongoose.Types.ObjectId, 
            ref: 'categories' //tên model
        }
    ],
    name:String,
    sdt: Number,
    address : String,
    city: String,
    note: String
}, {
    timestamps: true,
})

module.exports = productSchema