// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Faça login na sua conta Runova</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#ffffff" />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#a5a5a5"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#ffffff" />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#a5a5a5"
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou faça login com</Text>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#ffffff" />
        <Text style={styles.socialText}>Entrar com Google</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}> Cadastre-se</Text>
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
  forgotPassword: {
    color: '#a5a5a5',
    textAlign: 'right',
    fontSize: 14,
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 5,
  },
  footerText: {
    color: '#a5a5a5',
    fontSize: 14,
  },
  signUpText: {
    color: '#ff6f61',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
