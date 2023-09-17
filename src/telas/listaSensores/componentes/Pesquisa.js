import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Lupa from '../../../../assets/IconeLupa.svg';

const { width } = Dimensions.get('window'); // Get the screen width

export const Pesquisa = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    // Display the typed text in the console
    if (searchText) {
      console.log(searchText);
      setSearchText('');
    }
    if (searchText.length === 0) {
      console.log('No search text');
    }
  };

  // Calculate the width of the search bar based on screen width
  const searchBarWidth = width - 24; // Subtract padding/margin

  return (
    <View style={[styles.group, { width: searchBarWidth }]}>
      <View style={styles.overlapGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Pesquisar estação"
          placeholderTextColor="#00000080"
          value={searchText}
          onChangeText={(text) => setSearchText(text)} // Update the search text
        />
        <TouchableOpacity onPress={handleSearchClick}>
          <Lupa />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 47,
    marginVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
});
