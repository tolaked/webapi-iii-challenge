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

module.exports = { validateUser };
