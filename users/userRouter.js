const express = require("express");
const {
  newUser,
  getUserPosts,
  getUsers,
  deleteUser
} = require("../controller/user");
const {
  validateUser,
  validateUserId,
  validatePost
} = require("../middleware/validation");
const router = express.Router();

router.use("/:id", validateUserId);

router.post("/postuser", validateUser, newUser);

router.post("/:id/posts", validatePost, async (req, res) => {});

router.get("/", getUsers);

router.get("/:id", (req, res) => {
  return res.status(200).json(req.user);
});

router.get("/:id/posts", getUserPosts);

router.delete("/:id", deleteUser);

router.put("/:id", (req, res) => {});

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
