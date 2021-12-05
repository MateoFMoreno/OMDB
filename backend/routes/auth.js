const express = require("express");
const passport = require("passport");

const AuthController = require("../controllers/auth");
const checkAuth = require("../middlewares/auth");

const router = express.Router();

// GET
router.get("/me", checkAuth, AuthController.findMyUser);
router.get("/logout", checkAuth, AuthController.logoutUser);

// POST
router.post("/register", AuthController.createUser);
router.post("/login", passport.authenticate("local"), AuthController.loginUser);

module.exports = router;
