import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function CustomButton({buttonwidth,onPress,buttonText,backgroundColor,textColor}) {
    return (
        <View style={{width:buttonwidth?buttonwidth:"40%"}}>
        <TouchableOpacity
        onPress={onPress} 
        style={{
            height:40,
            backgroundColor:backgroundColor?backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:50,
            // marginHorizontal:25,
            borderColor:'grey',
            borderWidth:1
        }}>
            <Text style={{color:textColor?textColor:"white", fontSize:18}}>{buttonText?buttonText:"Submit"}</Text>
        </TouchableOpacity>
        </View>
    )
}
