import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Header = ({backImg,Profile}) => {
const [isBackPresent,changePresent] =  useState(true);
const [isProfile,changeProfile] =  useState(true);
    return (
        <View style={{flex:1,flexDirection:'row'}}>
 {isBackPresent?<TouchableOpacity onPress={()=>alert("pressed")}>
        <View style={{width:'20%',marginLeft:'2%'}}>
        <Image style={{ width: 60, height: 60 }} source={require('../assets/Image_01.png')} />
        </View>
        </TouchableOpacity> : null}      
        <View style={{width:'60%'}}>
        <Text>Calender</Text>
        </View>
{isProfile?
        <TouchableOpacity onPress={()=>alert("Pressed")}>
        <View style={{justifyContent:'flex-end',width:'20%'}}>
        <Image style={{ width: 60, height: 60 }} source={require('../assets/Image_01.png')} />
        </View>
        </TouchableOpacity>: null}
        </View>
    )
}





export default Header
const styles = StyleSheet.create({})
