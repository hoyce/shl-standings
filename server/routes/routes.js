'use strict'

const express = require('express')
const router = express.Router()
const Standings = require('../controllers').Standings

router.get('/', Standings.getTable)

module.exports = router
