const bcrypt = require('bcrypt');
const User = require('../models/User');

// Função para cadastrar um novo usuário
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Verificar se o e-mail já existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'E-mail já cadastrado.' });
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar novo usuário
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
};

module.exports = { registerUser };
