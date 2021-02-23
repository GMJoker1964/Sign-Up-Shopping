const express = require('express')

const categoryHandler = require('../modules/category')

const router = new express.Router()

router.get('/', categoryHandler.findMany)

router.get('/:id', categoryHandler.findOne)

router.post('/', categoryHandler.create)

router.put('/', categoryHandler.update)

router.delete('/:id', categoryHandler.delete)

module.exports =router