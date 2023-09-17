import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchAirQualityData } from '../../services/carregaDadosMapa';
import Topo from './componentes/Topo';
import { useNavigation } from '@react-navigation/native';
import { Pesquisa } from './componentes/Pesquisa';

const SensorDisplay = () => {
  const navigation = useNavigation();
  const [airQualityData, setAirQualityData] = useState([]);

  const getSensorData = async () => {
    try {
      const sensorData = await fetchAirQualityData();
      setAirQualityData(sensorData);
    } catch (error) {
      console.error(error);
    }
  };

  const getMarkerColor = (airQuality) => {
    if (airQuality >= 25 && airQuality < 50) {
      return 'yellow';
    } else if (airQuality >= 50 && airQuality < 75) {
      return 'orange';
    } else if (airQuality >= 75 && airQuality < 125) {
      return 'red';
    } else if (airQuality >= 125) {
      return 'purple';
    } else {
      return '#7FF446'; // Define uma cor padrão, caso nenhum dos casos anteriores seja atendido.
    }
  };

  useEffect(() => {
    getSensorData();

    const intervalId = setInterval(() => {
      getSensorData();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getSensorData();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 75 }}>
      <Topo />
      <Pesquisa/>
      <FlatList
        data={airQualityData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[estilos.container, { padding: 10, borderBottomWidth: index === airQualityData.length - 1 ? 0 : 1, borderBottomColor: '#ccc' }]}>
            <TouchableOpacity>
              <View style={estilos.sensorInfoContainer}>
                <View style={[estilos.markerContainer, { backgroundColor: getMarkerColor(item['pm2.5']) }]}>
                  <Text style={estilos.valorSensor}>{item['pm2.5']}</Text>
                </View>
                <View style={estilos.nome}>
                  <Text style={estilos.nomeSensor}>{item.name}</Text>
                </View>
                
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={{ padding: 10 }}>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
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
  }
});

export default SensorDisplay;
