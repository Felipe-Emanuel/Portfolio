const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateHash = require("../utils/bcrypt");
const User = require("../models/User");


const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const passwordHash = await generateHash(password);
  const userExists = await User.findOne({ email: email });

  const user = User({
    name,
    email,
    password: passwordHash,
  });

  if (!name || !email || !password) {
    return res
      .status(402)
      .json({ message: "Todos os campos são obrigatórios!" });
  }
  
  if (name.length < 3 || name.length > 50) {
    return res.status(422).json({ message: "Nome deve conter entre 3 e 24 carácteres" });
  }
  
  if (password !== confirmPassword) {
    return res.status(422).json({ message: "As senhas não são compatíveis!" });
  }

  if (password.length < 8) {
    return res.status(422).json({ message: "A senha deve conter mais que 8 caractéres!" });
  }


  if (userExists) {
      return res.status(422).json({ message: "Email já cadastrado!" });
    }

  try {
    await user.save();

    res.status(201).json({ messsage: "Email registrado com sucesso!", auth: true });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message:
        "Um erro inesperado ocorreu no servidor. Por favor, tente mais tarde!",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(402)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ message: "Senha inválida!" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res.status(200).json({ message: "Autenticação realizada com sucesso", token, id: user._id })
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message:
        "Um erro inesperado ocorreu no servidor. Por favor, tente mais tarde!",
    });
  }
};

const authController = {
  register,
  login
}

module.exports = authController