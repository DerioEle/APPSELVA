import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ZoomMais from "../../../assets/IconeMaisZoom.svg";
import ZoomMenos from "../../../assets/reduzir-o-zoom.svg";
import { useFocusEffect } from '@react-navigation/native';
import { fetchAirQualityData } from '../../services/carregaDadosMapa';
import CustomMarker from './componentes/marcador';

export default function MapaTeste({ navigation }) {
  const mapRef = useRef(null);
  const [airQualityData, setAirQualityData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const getSensorData = async () => {
    try {
      const sensorData = await fetchAirQualityData();
      setAirQualityData(sensorData);
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!dataLoaded) {
      getSensorData();
    }

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

  const handleZoomIn = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: mapRef.current.__lastRegion.latitude,
        longitude: mapRef.current.__lastRegion.longitude,
        latitudeDelta: mapRef.current.__lastRegion.latitudeDelta / 2,
        longitudeDelta: mapRef.current.__lastRegion.longitudeDelta / 2,
      }, 200);
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: mapRef.current.__lastRegion.latitude,
        longitude: mapRef.current.__lastRegion.longitude,
        latitudeDelta: mapRef.current.__lastRegion.latitudeDelta * 2,
        longitudeDelta: mapRef.current.__lastRegion.longitudeDelta * 2,
      }, 200);
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: -3.10719,
          longitude: -60.0261,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => {
          // Atualizar a referência de última região quando o mapa for movido
          mapRef.current.__lastRegion = region;
        }}
      >
        {dataLoaded &&
          airQualityData.map((sensor, index) => (
            <CustomMarker
              key={index}
              coordinate={{
                latitude: sensor.latitude,
                longitude: sensor.longitude,
              }}
              airQuality={sensor['pm2.5']}
            />
          ))}
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleZoomIn}
        >
          <ZoomMais />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleZoomOut}
        >
          <ZoomMenos />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    marginTop: 120,
    alignSelf: "center",
    width: 40,
    height: 75,
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: "#CDCDCD",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#CDCDCD',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
