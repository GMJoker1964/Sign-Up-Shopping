const express = require('express')

const productHandler = require('../modules/product')
// const {validateAccessToken} = require('../modules/auth')

const productRouter = new express.Router()

productRouter.get('/', productHandler.findMany)

productRouter.get('/:id', productHandler.findOne)

productRouter.post('/' ,productHandler.create)

productRouter.put('/', productHandler.update)

productRouter.delete('/:id', productHandler.delete)

module.exports =productRouter

