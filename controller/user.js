const db = require("../users/userDb");

module.exports = {
  newUser,
  getUserPosts
};

function newUser(req, res) {
  const name = req.body;
  console.log(name);
  db.insert(name).then(user => {
    res.status(201).json({
      success: true,
      user
    });
  });
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
