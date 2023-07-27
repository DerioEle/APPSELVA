import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Mapa() {
  const [region, setRegion] = useState({
    latitude:  -3.10719,
    longitude: -60.0261,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const onZoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    }); 
  };

  const onZoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={setRegion}
      />
      <View style={styles.button}>
      <TouchableOpacity
        onPress={onZoomIn}
        style={styles.buttonIn}
      >
        <Text>Zoom In</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={onZoomOut}
        style={styles.buttonOut}
      >
        <Text>Zoom Out</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    marginTop: 120,
    alignSelf: "center",
    width: 50,
    height: 75,
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: "#000",
    borderWidth:1,
    
  },
  buttonIn:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOut:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },

});