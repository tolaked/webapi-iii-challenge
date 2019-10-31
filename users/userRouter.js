const express = require("express");
const { newUser, getUserPosts, getUsers } = require("../controller/user");
const {
  validateUser,
  validateUserId,
  validatePost
} = require("../middleware/validation");
const router = express.Router();

router.use("/:id", validateUserId, async (req, res) => {});

router.post("/postuser", validateUser, newUser);

router.post("/:id/posts", validateUserId);

router.get("/", getUsers);

// router.get("/:id", (req, res) => {});

// router.get("/:id/posts", (req, res) => {});

// router.delete("/:id", (req, res) => {});

// router.put("/:id", (req, res) => {});

//custom middleware

// function validateUserId(req, res, next) {}

// function validateUser(req, res, next) {}

// function validatePost(req, res, next) {}

function errorHandler(err, req, res, next) {
  if (err) {
    const { status, message } = err;
    return res.status(status).json({ message });
  } else next();
}

router.use(errorHandler);

module.exports = router;
