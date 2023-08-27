import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchAirQualityData } from '../../services/carregaDadosMapa';
import Topo from './componentes/Topo';

const SensorDisplay = ({ navigation }) => {
  const [airQualityData, setAirQualityData] = useState([]);

  const getSensorData = async () => {
    try {
      const sensorData = await fetchAirQualityData();
      setAirQualityData(sensorData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSensorData();

    const intervalId = setInterval(() => {
      getSensorData();
    },5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getSensorData();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 10 }}>
      <Topo />
      <FlatList
        data={airQualityData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ padding: 10, borderBottomWidth: index === airQualityData.length - 1 ? 0 : 1, borderBottomColor: '#ccc' }}>
            <Text>Nome do sensor: {item.name}</Text>
            <Text>Qualidade do ar: {item['pm2.5']}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={{ padding: 10 }}>
            <Text>Carregando os dados...</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SensorDisplay;
