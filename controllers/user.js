const User = require("../models/User");

const user = (req, res) => {
  res.status(200).json({ message: "Bem vindo ao Espaço!" });
};

const userId = async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
};

const userController = {
  user,
  userId,
};

module.exports = userController;
