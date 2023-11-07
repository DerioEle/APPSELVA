import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';

//Telas
import MapaTeste from '../telas/mapa';
import SensorDisplay from '../telas/listaSensores';
import Infos from '../telas/infos';
import Perguntas from '../telas/infos/perguntas';
import Manter from '../telas/infos/manutencao';
import Montar from '../telas/infos/montagem';
import Pergunta1 from '../telas/infos/componentes/Pergunta1';
import Pergunta2 from '../telas/infos/componentes/Pergunta2';

//Assets
import Mapa from "../../assets/mapa.svg";
import Sensor from "../../assets/SinalNovo.svg";
import Info from "../../assets/Infos.svg";
import Fundo from "../../assets/telaFundo.png";

const PerguntaStack =createNativeStackNavigator();
const Tab = createBottomTabNavigator();
let tamanho = 25

function MyStack(){
  return(

    <PerguntaStack.Navigator 
      initialRouteName='Infos'
    >
      

      <PerguntaStack.Screen 
        name='Infos' 
        component={Infos}    
        options={{
          title:'',
          headerTransparent:true,
        }}
      />


      

      <PerguntaStack.Screen 
        name="Montar"
        component={Montar}
        options={{
          title:'',
          headerTransparent:true,
        }}
      />
      <PerguntaStack.Screen
        name="Manter"
        component={Manter}
        options={{
          title:'',
          headerTransparent:true,
        }}
      /> 


      
      <PerguntaStack.Screen 
        name="Perguntas"
        component={Perguntas}
        options={{
          title:'Perguntas Frequentes',
          //headerTintColor:"#0C760A"
          
        }}
      />
       <PerguntaStack.Screen 
        name="Pergunta1"
        component={Pergunta1}
        options={{
          title:'',
          //headerTintColor:"#0C760A"
          
        }} 
      />
      <PerguntaStack.Screen 
        name="Pergunta2"
        component={Pergunta2}
        options={{
          title:'',
          //headerTintColor:"#0C760A"
          
        }}        
      />

      
    </PerguntaStack.Navigator>
  );
}



function MyTabs(){
  return(
    <Tab.Navigator 

          screenOptions={({ route }) => ({ 
          headerShown: false,
         
          tabBarIcon: ({ color }) => {
            let Icon = Mapa;

            if (route.name === "Sensores"){
              Icon = Sensor;
            }
            if (route.name === "Informações")
              Icon = Info;

            return <Icon color={color} fill={color} width={tamanho} height={tamanho} />
          },
          //Vai ficar comentando até eu aprender a mexer
          // tabBarActiveBackgroundColor: "#D3EAD3",
          tabBarActiveTintColor: "#0C760A",
          tabBarInactiveTintColor: "#797777",
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle:{
            position: "absolute",
            //bottom: 45,
            //left: 14,
            //right: 14,
            //borderRadius: 35,
            height: 60,
            paddingBottom: 10,
            paddingTop: 15,
           
          },
          
          })}>
          <Tab.Screen name='Mapa' component={MapaTeste}  />
          <Tab.Screen name='Sensores' component={SensorDisplay} />
          <Tab.Screen name='Informações' component={MyStack} />
       
    </Tab.Navigator>
    
  );
}

export default function Telas() {
  return (
    <NavigationContainer>  
      <MyTabs/>
    </NavigationContainer>
   
  );
}
