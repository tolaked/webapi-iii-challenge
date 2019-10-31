const db = require("../users/userDb");

const createError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

function validateUser(req, res, next) {
  const { body } = req;
  try {
    if (!body) {
      throw createError("User data not provided");
    } else if (!body.name) {
      throw createError("name is a required field");
    }
  } catch (error) {
    next(error);
  }
}

async function validateUserId(req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await db.getById(id);
    if (user) {
      req.user = user;
      return next();
    } else {
      throw createError("invalid user id");
    }
  } catch (error) {
    return next(error);
  }
}

function validatePost(req, res, next) {
  const { body } = req;
  try {
    if (!body) {
      throw createError("Post data is not provided");
    } else if (!body.text) {
      throw createError("Text is a required field");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { validateUser, validateUserId, validatePost };
