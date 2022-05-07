const express = require('express')
const router = express.Router()
const DetailController = require('../controllers/DetailController')

router.get('/:id',DetailController.getWordById)

module.exports = router