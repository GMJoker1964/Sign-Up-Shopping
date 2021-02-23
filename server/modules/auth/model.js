const mongoose= require('mongoose')

const userProfileSchema = require('./schema')
const MODEL_NAME = 'user-profile'
const COLECTION_NAME = 'user-profile'

const userProfileModel = mongoose.model(MODEL_NAME, userProfileSchema, COLECTION_NAME)

module.exports = userProfileModel
