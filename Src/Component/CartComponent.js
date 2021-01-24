import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CartComponent = () => {
    return (
        <View style={{backgroundColor:'#fff',shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,borderRadius: 10}}>
            <View style={{flexDirection:'row',paddingVertical:'5%'}}>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center',borderRightColor:"grey", borderRightWidth:1}}>
                <View><Text>Cow</Text></View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'7%'}}><Text>Rs </Text></View>
                    <Text style={{fontSize:23}}>45</Text>
                    <View style={{marginTop:'7%'}}><Text> Litre</Text></View>
                </View>
                </View>
                </View>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center',borderRightColor:"grey", borderRightWidth:1}}>
                <View><Text>Buffalo</Text></View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'7%'}}><Text>Rs </Text></View>
                    <Text style={{fontSize:23}}>45</Text>
                    <View style={{marginTop:'7%'}}><Text> Litre</Text></View>
                </View>
                </View>
                </View>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <View><Text>Desi cow</Text></View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'7%'}}><Text>Rs </Text></View>
                    <Text style={{fontSize:23}}>45</Text>
                    <View style={{marginTop:'7%'}}><Text> Litre</Text></View>
                </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default CartComponent

const styles = StyleSheet.create({})
