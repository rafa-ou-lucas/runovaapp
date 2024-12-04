import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Redireciona para a tela de Login após 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Runova</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Fundo preto para contraste
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
