import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, FlatList } from 'react-native';

import Lupa from '../../../../assets/IconeLupa.svg';


const { width } = Dimensions.get('window');

export const Pesquisa = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState();
  const [list,setList]=useState(airQualityData);
  const [airQualityData, setAirQualityData] = useState([]);

  useEffect(()=>{
    if(searchText===""){
      setList(airQualityData);
    }
    else{
      setList(
        airQualityData.filter(item=>{
          if(item.name.indexOf(searchText)>-1){
            return true;
          }else{
            return false;
          }
        })
      );
    }

  },[searchText]);
  // useEffect(() => {
  //   if (searchText === '') {
  //     setFilteredResults();
  //   } else {
  //     setFilteredResults(
  //       results.filter(
  //         (item) =>
  //           item.station.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  //       )
  //     );
  //   }
  // }, [searchText]);
  // const handleSearchClick = () => {
  //   onSearchClick(searchText);
  // };

  // const clearSearch = () => {
  //   setSearchText('');
  //   onClearSearch();
  // };

  const searchBarWidth = width - 24;

  return (
    <View style={styles.group}>
      <View style={styles.overlapGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Pesquisar estação"
          placeholderTextColor="#00000080"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          accessibilityLabel="Search Station"
        />
        {searchText.length > 0 && (
          <TouchableOpacity>
              <Text>Clear </Text>
        </TouchableOpacity>
        )}
        <TouchableOpacity >
          <Lupa />
        </TouchableOpacity>
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
    </View>
    
  );
};

const styles = StyleSheet.create({
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
});