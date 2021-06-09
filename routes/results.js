const express = require('express')
const router = express.Router()
const resultsController = require('../controllers/results')

router.post('/contrast', resultsController.getContrast)

module.exports = router
