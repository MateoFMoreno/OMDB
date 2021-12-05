const express = require("express");
const MediaController = require("../controllers/media");

const router = express.Router();

// GET
router.get("/any/:name", MediaController.getAnyByName);
router.get("/movies/:name", MediaController.getMoviesByName);
router.get("/series/:name", MediaController.getSeriesByName);
router.get("/search/:id", MediaController.getMediaById);
router.get("/date/:name/:date", MediaController.getMoviesByNameAndDate);
router.get('/home', MediaController.getHomeData)


module.exports = router;
