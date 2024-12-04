const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Verificando se o e-mail já está registrado
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'E-mail já registrado' });
  }

  // Criptografando a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criando um novo usuário
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    // Salvando o novo usuário no banco
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Rota para login de um usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Procurando o usuário pelo e-mail
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Usuário não encontrado' });
  }

  // Verificando se a senha está correta
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Senha incorreta' });
  }

  res.status(200).json({ message: 'Login bem-sucedido' });
});

module.exports = router;
