import React from "react";
import { View, Text, StyleSheet, SafeAreaView ,ImageBackground,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
//assets
import Fundo from "../../../assets/telaFundo.png";
import Voluntario from "../../../assets/voluntariado.png";
import Stem from "../../../assets/stem.png";
import Edu from "../../../assets/edu.png";

//componentes
import Manter from "./componentes/FlatManter";

const manutencao = () => {
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
    const solucoes = [
      {
        id: 1,
        pergunta: 'O que é React Native?',
        resposta: 'React Native é um framework que permite desenvolver aplicativos móveis usando JavaScript e React.',
        open:"Pergunta1",
      },
      {
        id: 2,
        pergunta: 'Como criar um modal em React Native?',
        resposta: 'Para criar um modal em React Native, você pode usar o componente Modal e controlar sua visibilidade com um estado.',
        open:"Pergunta2",
      },
    ]
    const navigation = useNavigation();
    return (
      <ImageBackground source={Fundo} style={styles.backgroundImage}>
        <SafeAreaView style={{ flex: 1, paddingBottom: 85 }}>
             
            <View style={styles.component}>        
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, marginTop: 90 }}>Como fazer manutenção do sensor? </Text> 
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10}}> </Text> 
                {solucoes.map((solucao) => (
              <TouchableOpacity
              key={solucao.id}
              style={styles.perguntaContainer}
              onPress={()=>navigation.navigate(solucao.open)}
            >
            <Text style={styles.arrowIcon}>ᐳ</Text> 
              <Text style={styles.perguntaText}>{solucao.pergunta}</Text>
              
            </TouchableOpacity>
            ))}
            </View>
          
        </SafeAreaView>
      </ImageBackground>
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
    valorSensor:{
      fontSize: 17,
      fontWeight: 'bold',
    },
    nomeSensor:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1, // Isso fará com que a imagem preencha a tela inteira
    },
    nome:{
      left: 40,
    },
    perguntaText: {
      fontSize: 16, 
      marginLeft: 14,
      paddingRight: 10, // Adicione o valor de padding desejado
    },
    perguntaContainer: {
      flexDirection: 'row-reverse', // Define a direção como reversa
      alignItems: 'center',
      justifyContent: 'space-between', // Espaçamento entre os elementos
      marginBottom: 10,
      display: 'flex',
      top: 8,
      borderRadius: 15,
      width: 360,
      height: 50,
      marginHorizontal: '6%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    arrowIcon: {
      fontSize: 20,
      marginRight: 10, // Espaçamento entre o ícone e o texto da pergunta
    },
  });
  export default manutencao;