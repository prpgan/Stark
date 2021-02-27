import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';

const Animation = () => {
    return (
        <Animatable.View animation ="slideInDown"  
        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#00BCD4'}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Text>Animation Try</Text>
        </Animatable.View>
    )
}

export default Animation

const styles = StyleSheet.create({})
