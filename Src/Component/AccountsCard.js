import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountsCard = () => {
    return (
        <View style={{flexDirection:'row',backgroundColor:'#fff',elevation:5,borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,height:80}}>
            <View style={{width:'20%',alignItems:'center',justifyContent:'center'}}>
                <Text>AUG</Text>
            </View>
            <View style={{width:'30%',justifyContent:'center'}}>
                <Text>Buffalo-35L</Text>
                <Text>Cow-35L</Text>
                <Text>Desi Cow-35L</Text>
            </View>
            <View style={{width:'20%',justifyContent:'center'}}>
                <Text>Rs 2500</Text>
                <Text>Rs 2055</Text>
                <Text>Rs 2500</Text>
            </View>
            <View style={{width:'30%',backgroundColor:'green',alignItems:'center',borderTopLeftRadius:40,borderBottomRightRadius:40,justifyContent:'center'}}>
                <Text>Total</Text>
                <View style={{flexDirection:'row'}}>
                    <Text></Text><Text style={{fontSize:20}}>7500</Text>
                </View>
                <Text>Paid</Text>
            </View>
        </View>
    )
}

export default AccountsCard

const styles = StyleSheet.create({})