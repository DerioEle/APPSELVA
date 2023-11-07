import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Dimensions,TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchAirQualityData } from '../../services/carregaDadosMapa';
import Topo from './componentes/Topo';
import Selva from './componentes/BotaoSelva';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { Pesquisa } from './componentes/Pesquisa';
import { ImageBackground } from 'react-native';
import Fundo from "../../../assets/telaFundo.png";

const SensorDisplay = () => {
  const navigation = useNavigation();
  const [airQualityData, setAirQualityData] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredSensors, setFilteredSensors] = useState([]); // Adicione este estado
  const [list,setList]=useState(airQualityData);

  useEffect(()=>{
    if(searchText === ''){
      setList(airQualityData);
    }
    else{
      setList(
        airQualityData.filter(item=>{
          if(item.name.indexOf(searchText) > -1){
            return true;
          }else{
            return false;
          }
        })
      );
    }

  },[searchText]);


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

  const getFundoColor = (airQuality) => {
    if (airQuality >= 25 && airQuality < 50) {
      return 'rgba(237, 237, 155, 0.8)';
    } else if (airQuality >= 50 && airQuality < 75) {
      return 'rgba(218, 156, 111, 0.7)';
    } else if (airQuality >= 75 && airQuality < 125) {
      return 'rgba(208, 138, 138, 0.8)';
    } else if (airQuality >= 125) {
      return 'rgba(200, 140, 180, 0.6)';
    } else {
      return 'rgba(20, 186, 17, 0.6)'; // Define uma cor padrão, caso nenhum dos casos anteriores seja atendido.
    }
  };
  const getStatus = (airQuality) => {
    if (airQuality >= 25 && airQuality < 50) {
      return 'Moderada';
    } else if (airQuality >= 50 && airQuality < 75) {
      return 'Ruim';
    } else if (airQuality >= 75 && airQuality < 125) {
      return 'Muito Ruim';
    } else if (airQuality >= 125) {
      return 'Péssimo';
    } else {
      return 'Boa'; // Define uma cor padrão, caso nenhum dos casos anteriores seja atendido.
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
  const showModal = (sensor) => {
    setSelectedSensor(sensor);
  };

  
  return (
    <ImageBackground source={Fundo} style={estilos.backgroundImage}>
      <SafeAreaView style={{ flex: 1, paddingBottom: 75 }}>
        <Topo />
        <View style={estilos.overlapGroup}>
          <TextInput
            style={{
              flex: 1,
              color: '#00000080',
              fontSize: 15,
              fontWeight: '700',
              marginLeft: 20,
              marginRight: 20,
              borderWidth:3 ,
              height:40,
              borderColor:'white' ,
              borderRadius: 20,
              backgroundColor: 'white',
              marginBottom: 15,
             
              
            }}


              placeholder="   Pesquisar estação"
              placeholderTextColor="#00000080"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}

          />
        </View>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                estilos.container,
                { backgroundColor: getFundoColor(item['pm2.5']) },
                { padding: 10, borderBottomWidth: index === airQualityData.length - 1 ? 0 : 1, borderBottomColor: '#ccc' },
                { marginBottom: 10 }
              ]}
            >
              <TouchableOpacity onPress={() => showModal(item)}>
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

      {/* Modal para exibir informações adicionais do sensor */}
      <Modal isVisible={selectedSensor !== null} onBackdropPress={() => setSelectedSensor(null)}>
        <View style={estilos.modalContainer}>
          {selectedSensor && (
            <View>
              <Text style={estilos.modalSensorName}>{selectedSensor.name}</Text>
              <Text>- Latitude: {selectedSensor.latitude}</Text>
              <Text>- Longitude: {selectedSensor.longitude}</Text>
              <Text>- Qualidade do ar: {selectedSensor['pm2.5'].toString()}  PM2.5 (µg/m³)</Text>
              <Text>- Nível de poluição: {getStatus(selectedSensor['pm2.5']).toString()} </Text>
            </View>
          )}
        </View>
      </Modal>

    </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  sensorInfoContainer: {
    flexDirection: 'row', // Coloca os elementos lado a lado
    alignItems: 'center', // Centraliza verticalmente
  },
  markerContainer: {//bolinha
    borderRadius: 30,
    width: 53,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  container: {
    display: 'flex',
    top:8,
    borderRadius: 25,
    width: 370,
    marginHorizontal: '5%' 
    
    
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
    //flexDirection: 'row-reverse',
    
  },
  backgroundImage: {
    flex: 1, // Isso fará com que a imagem preencha a tela inteira
  },
  arrowIcon: {
    fontSize: 20,
    marginRight: 20, // Espaçamento entre o ícone e o texto da pergunta
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalSensorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  group: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 16,
    marginLeft: 12,
  },
  overlapGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#00000080',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },
  clearButton: {
    padding: 8,
  },
  searchButton: {
    padding: 8,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  overlapGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SensorDisplay;
