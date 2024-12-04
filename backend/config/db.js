const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Substitua a string abaixo pela URL de conexão do seu MongoDB
    const dbURI = 'mongodb://localhost:27017/runovaApp'; // ou use a URL de um banco remoto
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro na conexão com o MongoDB', err);
    process.exit(1); // Encerra o processo em caso de erro na conexão
  }
};

module.exports = connectDB;
