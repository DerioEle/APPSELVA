import React from "react";
import { View, ImageBackground,FlatList, Dimensions,Image,TouchableOpacity,Linking} from "react-native";


const {width}= Dimensions.get('window')
const listahorizontal=({data})=>{
    return (
        <FlatList 
            data={data} 
          
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal 
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate="fast"
            style={{marginTop:180}}
            renderItem={({item})=>(
                <TouchableOpacity  style={{ flex: 1, borderRadius: 25 ,height:142, 
                    width:311,   
                    // height:width/2.6,
                    // width:width*0.8,
                    marginHorizontal:10,
                    borderRadius:25,}} onPress={() => Linking.openURL(item.url)}>
                <Image source={item.imageUrl}  >
                        
                </Image>
              </TouchableOpacity>                       
            ) }
        />
   );
};

export default listahorizontal;


