import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapaTeste from '../telas/mapa';
import SensorDisplay from '../telas/listaSensores';
import Infos from '../telas/infos';
import Mapa from "../../assets/mapa.svg";
import Sensor from "../../assets/SinalNovo.svg";
import Info from "../../assets/Infos.svg";

const Tab = createBottomTabNavigator();
let tamanho = 25

export default function Telas() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({ 
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
        bottom: 14,
        left: 14,
        right: 14,
        borderRadius: 35,
        height: 60,
        paddingBottom: 10,
        paddingTop: 17,
      },
      
      })}>
      <Tab.Screen name='Mapa' component={MapaTeste}  />
      <Tab.Screen name='Sensores' component={SensorDisplay} />
      <Tab.Screen name='Informações' component={Infos} />
      
    </Tab.Navigator>
  </NavigationContainer>
   
  );
}
