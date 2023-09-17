import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Lupa from '../../../../assets/IconeLupa.svg';

export const Pesquisa = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    // Display the typed text in the console
    if (searchText){
        console.log(searchText);
        setSearchText('');
    }
    if (searchText.length == 0){
        console.log('No search text');
    }
  };

  return (
    <View style={styles.group}>
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
    width: 380,
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
