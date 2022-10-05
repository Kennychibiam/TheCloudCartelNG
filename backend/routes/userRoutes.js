const express = require("express");

const userRoutes = express.Router();
const { logIn, signUp } = require("../controllers/userController");

userRoutes.post("/login", logIn);
userRoutes.post("/signup", signUp);

module.exports = userRoutes;
