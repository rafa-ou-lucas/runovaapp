// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      console.log("Enviando requisição para:", 'http://192.168.1.4:5000/api/auth/register');
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.message);
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', data.message);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao se cadastrar. Tente novamente mais tarde.');
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para se cadastrar</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#ffffff" />
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#a5a5a5"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#ffffff" />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#a5a5a5"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#ffffff" />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#a5a5a5"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#ffffff" />
        <TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor="#a5a5a5"
          secureTextEntry={!showConfirmPassword}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <FontAwesome name={showConfirmPassword ? "eye" : "eye-slash"} size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
        <Text style={styles.signUpText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou cadastre-se com</Text>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#ffffff" />
        <Text style={styles.socialText}>Cadastrar com Google</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.footerText}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInText}> Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#a5a5a5',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#ffffff',
    paddingHorizontal: 10,
    height: 50,
  },
  signUpButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#a5a5a5',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d34836',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  socialText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 10,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 5,
  },
  footerText: {
    color: '#a5a5a5',
    fontSize: 14,
  },
  signInText: {
    color: '#ff6f61',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
