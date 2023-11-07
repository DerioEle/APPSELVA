import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView ,TouchableOpacity, Button} from "react-native";
import Topo from './componentes/topo';
import Seta from "../../../assets/SetaDireita.svg";
import Como from "../../../assets/MontarSensor.svg";
import Manutencao from "../../../assets/ManterSensor.svg";
import Perguntas from "../../../assets/PerguntasSensor.svg";
import TelaPeruntas from "./perguntas";
import Fundo from "../../../assets/telaFundo.png";

import Voluntario from "../../../assets/voluntariado.png";
import Stem from "../../../assets/stem.png";
import Edu from "../../../assets/edu.png";

import { ImageBackground } from 'react-native';
import ListaSaibaMais from './componentes/listahorizontal';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPerguntas from './perguntas'
import { useNavigation } from "@react-navigation/native";

const Component = () => {
  //const data=['#672bff','#52ff2b','#c41893'];
  const data = [
    {
      id: 1,
      imageUrl: Voluntario,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScry8mYx170Z5CQPGRv-m-7IL8ko2chD2gqqbkoDIQlrr1Osw/viewform?pli=1",
    },
    {
      id: 2,
      imageUrl: Stem,
      url: "https://www.instagram.com/acadstem/",
    },
    {
      id: 3,
      imageUrl: Edu,
      url: "https://www.instagram.com/educ.air/",
    },
  ];

  const navigation = useNavigation();

  return (
    
    // <SafeAreaView style={{ flex: 1, paddingBottom: 85 }}>
     
        <ImageBackground source={Fundo}  resizeMode="cover" style={styles.backgroundImage} >
          <Topo />
          <View style={styles.component}>
            
            <View style={styles.overlap}>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("Manter")}
              >
              <View style={styles.spaceBetweenViews}>
                <Manutencao/>
              </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.div}>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("Perguntas")}
              >
              <View style={styles.spaceBetweenViews}>
                <Perguntas/>
              </View>
            </TouchableOpacity>
            </View>

            
            <View style={styles.overlap2}>
            <TouchableOpacity onPress={()=>navigation.navigate("Montar")}>
              <View style={styles.spaceBetweenViews}>
                <Como/>
              </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.div}>  
              <Text style={{ fontSize: 20,fontWeight: "bold",top: 135, margin:13,left:7}} >Saiba mais</Text>
            </View>

            </View>
            <ListaSaibaMais data={data}/>
      
          
        </ImageBackground>
  
    // </SafeAreaView>
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
    top: 95,
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
    top: 190,
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
  spaceBetweenViews: {
    margin: 35, // Adicione a quantidade de espaço 
    
  },
  backgroundImage: {
    flex: 1, // Isso fará com que a imagem preencha a tela inteira
  },
});

export default Component;
