import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function CustomButton({onPress,buttonText}) {
    return (
        <View style={{flex:1}}>
        <TouchableOpacity
        onPress={()=>onPress} 
        style={{
            height:35,backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:50,
            marginHorizontal:25
        }}>
            <Text style={{color:"white"}}>{buttonText?buttonText:"Submit"}</Text>
        </TouchableOpacity>
        </View>
    )
}
