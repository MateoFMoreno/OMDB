const express = require('express');

// Routes
const media = require('./media')
const users = require('./user')
const auth = require('./auth')

// Middleware
const checkAuth = require('../middlewares/auth')

const router = express.Router();


router.use('/auth', auth)
router.use('/media', checkAuth, media)
router.use('/users',  checkAuth, users)

module.exports = router;

