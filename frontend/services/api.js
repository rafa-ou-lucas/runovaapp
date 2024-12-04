// src/services/api.js
const API_URL = 'http://localhost:5000'; // Seu backend (ajuste conforme necessário)

export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    return data; // Retorne os dados ou uma mensagem de sucesso
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw new Error('Falha ao registrar usuário');
  }
};
