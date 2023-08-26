import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ZoomMais from "../../../assets/IconeMaisZoom.svg";
import ZoomMenos from "../../../assets/reduzir-o-zoom.svg";


export default function MapaTeste() {
  const mapRef = useRef(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: -3.10719,
    longitude: -60.0261,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

   const handleZoomIn = () => {
     const zoomedRegion = {
       ...mapRegion,
       latitudeDelta: mapRegion.latitudeDelta / 2,
       longitudeDelta: mapRegion.longitudeDelta / 2,
     };
     setMapRegion(zoomedRegion);
     mapRef.current.animateToRegion(zoomedRegion, 200);
   };

   const handleZoomOut = () => {
     const zoomedOutRegion = {
       ...mapRegion,
       latitudeDelta: mapRegion.latitudeDelta * 2,
       longitudeDelta: mapRegion.longitudeDelta * 2,
     };
     setMapRegion(zoomedOutRegion);
     mapRef.current.animateToRegion(zoomedOutRegion, 200);
   };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={mapRegion}
        onRegionChange={setMapRegion}
      >
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button} 
            onPress={handleZoomIn}>
          <ZoomMais />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity 
            style={styles.button} 
            onPress={handleZoomOut}>
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