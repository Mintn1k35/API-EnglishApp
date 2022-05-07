const express = require('express')
const router = express.Router()
const UpdateController = require('../controllers/UpdateController')

router.post('/:id',UpdateController.update)

module.exports = router