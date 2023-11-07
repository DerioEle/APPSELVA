import React from "react";
import { View, Text, StyleSheet, SafeAreaView ,TouchableOpacity,ImageBackground} from "react-native";
import Fundo from "../../../assets/telaFundo.png";
import Voluntario from "../../../assets/voluntariado.png";
import Stem from "../../../assets/stem.png";
import Edu from "../../../assets/edu.png";

import Montar from "./componentes/FlatMontar";

const montagem = () => {
    const data = [
        {
          id: 1,
          imageUrl: Voluntario,
          
        },
        {
          id: 2,
          imageUrl: Stem,
          
        },
        {
          id: 3,
          imageUrl: Edu,
          
        },
    ];
    return (
      // <SafeAreaView style={{ flex: 1, paddingBottom: 85 }}>
        <ImageBackground source={Fundo}  style={styles.backgroundImage} >
          <View style={styles.component}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, marginTop: 90 }}>Como montar o sensor? </Text> 
              <Text style={{ color:"#0C760A",fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, marginTop: 40 }}>Passos </Text>
              <Montar data={data} />
          </View>
          
        </ImageBackground>
      // </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sensorInfoContainer: {
      flexDirection: 'row', // Coloca os elementos lado a lado
      alignItems: 'center', // Centraliza verticalmente
    },
    markerContainer: {
      borderRadius: 20,
      width: 43,
      height: 43,
      alignItems: 'center',
      justifyContent: 'center',
      left: 10,
    },
    container: {
      display: 'flex',
      top:8,
    },
    backgroundImage: {
        flex: 1, // Isso fará com que a imagem preencha a tela inteira
    },
    valorSensor:{
      fontSize: 17,
      fontWeight: 'bold',
    },
    nomeSensor:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    nome:{
      left: 40,
    },
 
  });
  export default montagem;