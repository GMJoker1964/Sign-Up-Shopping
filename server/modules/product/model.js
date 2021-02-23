const mongoose =require('mongoose')

const productSchema = require('./schema')
const COLECTION_NAME = 'products'
const MODEL_NAME = 'products'

const productModel = mongoose.model( MODEL_NAME,productSchema, COLECTION_NAME)

// productModel.countDocuments()
// productModel.find()
// productModel.findOne()
// productModel.create()
// productModel.findByIdAndUpdate()
// productModel.findByIdAndRemove()

module.exports = productModel