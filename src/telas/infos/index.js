import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Topo(){
  const navigation = useNavigation();
  
    return <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, marginTop: 40 }}>
        Informações
  </Text>
}