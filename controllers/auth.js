const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const generateHash = require("../utils/bcrypt");
const mailer = require("../modules/mailer");

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
    return res
      .status(422)
      .json({ message: "Nome deve conter entre 3 e 24 carácteres" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ message: "As senhas não são compatíveis!" });
  }

  if (password.length < 8) {
    return res
      .status(422)
      .json({ message: "A senha deve conter mais que 8 caractéres!" });
  }

  if (userExists) {
    return res.status(422).json({ message: "Email já cadastrado!" });
  }

  try {
    await user.save();

    res.status(201).json({
      messsage: "Email registrado com sucesso!",
      stats: 201,
      user: name,
    });
  } catch (error) {
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

    res.status(200).json({
      message: "Autenticação realizada com sucesso",
      token,
      id: user._id,
      name: user.name,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Um erro inesperado ocorreu no servidor. Por favor, tente mais tarde!",
    });
  }
};

const recoveryMail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({
        message:
          "Usuário não encontrado. Por favor, verifique se o email é igual ao email cadastrado!",
        status: 404,
      });

    const token = crypto.randomBytes(20).toString("hex");
    const randomNumber = Math.floor(Math.random() * 100);

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    });

    mailer.sendMail(
      {
        to: email,
        from: "SullivanSpaces@gmail.com",
        template: "auth/forgotPassword",
        context: { token, randomNumber },
      },
      (error) => {
        if (error)
          return res.status(400).json({
            message: "Não foi possível enviar um email de recuperação!",
          });

        return res.status(200).json({
          message: `email enviado para ${email}!`,
          status: 200,
          randomNumber: randomNumber,
          email: email
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      message:
        "Erro ao recuperar email cadastrado. Por favor, tente mais tarde!!",
    });
  }
};

const recovery = async (req, res) => {
  const { token, password, confirmPassword, email } = req.body;
  const passwordHash = await generateHash(password);

  try {
    const user = await User.findOne({ email }).select(
      "passwordResetToken passwordResetExpires password"
    );

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado!" });

    if (token !== user.passwordResetToken)
      return res.status(400).json({
        message: "Token inválido!",
        status: 400,
      });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res
        .status(400)
        .json({ message: "Token expirado. Por favor, gere um novo!" });

    if (password !== confirmPassword) {
      return res
        .status(422)
        .json({ message: "As senhas não são compatíveis!", status: 422 });
    }

    user.password = passwordHash;

    await user.save();

    res
      .status(200)
      .json({ message: "Senha atualizada com sucesso!", status: 200 });
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Erro ao recuperar senha. Por favor, tente mais tarde!",
    });
  }
};

const authController = {
  register,
  login,
  recoveryMail,
  recovery,
};

module.exports = authController;
