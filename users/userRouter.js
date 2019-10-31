const express = require("express");
const { newUser, getUserPosts, getUsers } = require("../controller/user");
const { validateUser } = require("../middleware/validation");
const router = express.Router();

router.post("/postuser", validateUser, newUser);

router.post("/:id/posts", getUserPosts);

router.get("/", getUsers);

// router.get("/:id", (req, res) => {});

// router.get("/:id/posts", (req, res) => {});

// router.delete("/:id", (req, res) => {});

// router.put("/:id", (req, res) => {});

//custom middleware

// function validateUserId(req, res, next) {}

// function validateUser(req, res, next) {}

// function validatePost(req, res, next) {}

module.exports = router;
