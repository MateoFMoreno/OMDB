const express = require('express');
const FavoritesController = require('../controllers/favorites')

const router = express.Router();

// GET
router.get('/:id', FavoritesController.getAllFavorites)

// POST
router.post('/:id/:movieId', FavoritesController.addMovieToFavorite)

// DELETE
router.delete('/delete/:id/:movieId', FavoritesController.deleteMovieFromFavorite)


module.exports = router;