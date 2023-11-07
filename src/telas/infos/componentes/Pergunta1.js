import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import Fundo from '../../../../assets/telaFundo.png';

export default function Pergunta1() {
  return (
    <ImageBackground source={Fundo} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>O que é React Native?</Text>
        <Text style={styles.description}>
        React Native é um framework que permite desenvolver aplicativos móveis usando JavaScript e React.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20, // Adicione a margem desejada à esquerda e à direita
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //marginVertical: 10,
  },
  description: {
    textAlign: 'justify',
    marginVertical: 30,
  },
});
