import React from "react";
import { Text } from "react-native";
import { View,  SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Selva from "../../../../assets/BotaoSelva.svg";

export default function BotaoSelva(){
    return ( 
    <SafeAreaView style={{ flex: 1, paddingBottom: 85 ,top:-15}}>
        <View >
        <View style={{margin: 35}}>
          <Selva/>
        </View>
        </View>
     </SafeAreaView>
    );
    
}