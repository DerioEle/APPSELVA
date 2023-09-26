import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Seta from "../../../assets/SetaDireita.svg";
import Como from "../../../assets/ComoMontarSensor.svg";
import Manutencao from "../../../assets/ManutençãoNoSensor.svg";
import Perguntas from "../../../assets/PerguntasFrequentes.svg";

const Component = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.component}>
      <View style={styles.overlap}>
        <Text style={styles.text}>Manutenção no sensor</Text>
        <View >
          <Manutencao/>
        </View>
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Perguntas Frequentes</Text>
        <View>
          <Perguntas/>
        </View>
      </View>
      <View style={styles.overlap2}>
        <Text style={styles.text}>Como montar sensor</Text>
        <View>
          <Como/>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  component: {
    height: 216,
    position: "relative",
    width: 311,
  },
  overlap: {
    height: 72,
    position: "absolute",
    top: 72,
    width: 311,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ferramentaDe: {
    height: 30,
    left: 22,
    position: "absolute",
    top: 14,
    width: 30,
  },
  div: {
    height: 72,
    position: "absolute",
    top: 144,
    width: 311,
  },
  perguntaParaFazer: {
    height: 30,
    left: 21,
    position: "absolute",
    top: 14,
    width: 30,
  },
  overlap2: {
    height: 72,
    position: "absolute",
    top: 0,
    width: 311,
  },
  educacaoOnline: {
    height: 32,
    left: 21,
    position: "absolute",
    top: 13,
    width: 32,
  },
});

export default Component;
