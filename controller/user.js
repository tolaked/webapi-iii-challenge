const db = require("../users/userDb");

module.exports = {
  newUser,
  getUserPosts,
  getUsers
};

async function newUser(req, res) {
  const name = req.body;
  console.log(name);
  try {
    const user = await db.insert(name); //.then(user => {
    return res.status(201).json({
      success: true,
      user
    });
  } catch ({ message }) {
    res.status(500).json({
      message: message || "there was an error adding user to the database"
    });
  }
}

function getUserPosts(req, res) {
  const id = req.params.id;
  db.getById(id).then(user => {
    res.status(200).json({
      success: true,
      message: `welcome ${user.name}`,
      user
    });
  });
}

function getUsers(req, res) {
  db.get().then(users => {
    res.status(200).json({
      success: true,
      users
    });
  });
}
