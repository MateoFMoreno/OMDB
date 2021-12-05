const express = require('express');

const favorites = require('./favorites');
const UserController = require('../controllers/user')

const router = express.Router();

// GET
router.get('/', UserController.searchUsers)
router.get('/:name', UserController.findUserByName)

// PUT
router.put('/:id', UserController.updateUser)
router.put('/:id/disable', UserController.disableUser)

// Route Favorites
router.use('/favorites', favorites)


module.exports = router;