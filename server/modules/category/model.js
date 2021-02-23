const mongoose =require('mongoose')
const schema = require('./schema')
const COLECTION_NAME = 'categories'
const MODEL_NAME = 'categories'

const categoryModel = mongoose.model(MODEL_NAME,schema,COLECTION_NAME)

module.exports= categoryModel