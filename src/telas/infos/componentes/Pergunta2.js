import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import Fundo from '../../../../assets/telaFundo.png';

export default function Pergunta2() {
  return (
    <ImageBackground source={Fundo} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Como criar um modal em React Native?</Text>
        <Text style={styles.description}>
          Para criar um modal em React Native, você pode usar o componente Modal e controlar sua visibilidade com um estado.
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
