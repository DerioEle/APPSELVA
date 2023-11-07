import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,TouchableOpacity,ImageBackground,Modal,Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Topo from './componentes/topoPerguntas';
import Fundo from "../../../assets/telaFundo.png";


const Perguntas = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedQuestion, setSelectedQuestion] = useState(null);

  const perguntas = [
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
    // {
    //   id: 3,
    //   pergunta: 'Como criar um navigationButton em React Native?',
    //   resposta: 'Para criar um modal em React Native, você pode usar o componente Modal e controlar sua visibilidade com um estado.',
    // },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  // const openModal = (pergunta) => {
  //   setSelectedQuestion(pergunta);
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setSelectedQuestion(null);
  //   setModalVisible(false);
  // };
  const navigation = useNavigation();
  return (
    <ImageBackground source={Fundo} style={styles.backgroundImage}>
      <SafeAreaView style={{ flex: 1, paddingBottom: 85 }}>
        
        <View style={styles.container}>
            {/* {perguntas.map((pergunta) => (
              <TouchableOpacity
              key={pergunta.id}
              style={styles.perguntaContainer}
              onPress={() => openModal(pergunta)}
            >
              <Text style={styles.perguntaText}>{pergunta.pergunta}</Text>
            </TouchableOpacity>
            ))}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModal}
            >
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{selectedQuestion?.pergunta}</Text>
                <Text style={styles.modalResposta}>{selectedQuestion?.resposta}</Text>
                <Button title="Fechar" onPress={closeModal} color="#0C760A" />
              </View>
            </Modal> */}

            {perguntas.map((pergunta) => (
              <TouchableOpacity
              key={pergunta.id}
              style={styles.perguntaContainer}
              onPress={()=>navigation.navigate(pergunta.open)}
            >
            <Text style={styles.arrowIcon}>ᐳ</Text> 
            <Text style={styles.perguntaText}>{pergunta.pergunta}</Text>
              
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
      top:10,
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
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    pergunta: {
      fontSize: 18,
      marginBottom: 10,
      textDecorationLine: 'underline',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalResposta: {
      fontSize: 16,
      marginBottom: 20,
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
      marginHorizontal: '2%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    arrowIcon: {
      fontSize: 20,
      marginRight: 10, // Espaçamento entre o ícone e o texto da pergunta
    },
  });
  export default Perguntas;