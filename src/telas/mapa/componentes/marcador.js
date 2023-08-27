import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CustomMarker({ coordinate, airQuality }) {
  let markerColor = 'green';

  if (airQuality >= 25 && airQuality < 50) {
    markerColor = 'yellow';
  } else if (airQuality >= 50 && airQuality < 75) {
    markerColor = 'orange';
  } else if (airQuality >= 75 && airQuality < 125) {
    markerColor = 'red';
  } else if (airQuality >= 125) {
    markerColor = 'purple';
  }

  const handleMarkerPress = () => {
    // Coloque aqui a lógica que você deseja executar quando o marcador for clicado.
    // Por exemplo, você pode abrir um modal ou navegar para outra tela.
  };

  return (
    <Marker coordinate={coordinate} onPress={handleMarkerPress}>
      <TouchableOpacity>
        <View style={[styles.markerContainer, { backgroundColor: markerColor }]}>
          <Text style={styles.markerText}>{airQuality}</Text>
        </View>
      </TouchableOpacity>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
