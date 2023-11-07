import React from "react";
import { View, ImageBackground,FlatList, Dimensions,Image,TouchableOpacity,Linking} from "react-native";


const {width}= Dimensions.get('window')
const FlatManter=({data})=>{
    return (
        <FlatList 
            data={data} 
          
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal 
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate="fast"
            
            style={{marginTop:85}}
            renderItem={({item})=>(
                
                <Image source={item.imageUrl} 
                style={{ 
                    flex: 1, 
                    height:200, 
                    //width:311,   
                    //height:width/2.6,
                    width:width*0.8,
                    marginHorizontal:35,
                    borderRadius:25,
                    }} >
                        
                </Image>
                                    
            ) }
        />
   );
};

export default FlatManter;

