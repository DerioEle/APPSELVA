import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapaTeste from '../telas/mapa';
import SensorDisplay from '../telas/listaSensores';
import Infos from '../telas/infos';
import Mapa from "../../assets/mapa.svg";
import Sensor from "../../assets/IconeSensor.svg";
import Info from "../../assets/IconeInformacoes.svg";

const Tab = createBottomTabNavigator();
let tamanho = 24

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
      tabBarActiveTintColor: "#0C760A",
      tabBarInactiveTintColor: "#C7C7C7",
      tabBarLabelStyle: {
        fontSize: 15,
      },

      })}>
      <Tab.Screen name='Mapa' component={MapaTeste} />
      <Tab.Screen name='Sensores' component={SensorDisplay} />
      <Tab.Screen name='Informações' component={Infos} />
      
    </Tab.Navigator>
  </NavigationContainer>
   
  );
}
