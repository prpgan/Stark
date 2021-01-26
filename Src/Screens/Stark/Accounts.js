import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TextInputComponent,ScrollView } from 'react-native'
import AccountCard from '../../Component/AccountsCard';

const Accounts = () => {
    const arr = [10,20,5,1,5,6,10,20,11,20,50,20,1]
    return (
        <View style={{ flex: 1,marginTop:'5%' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row',alignItems: 'center',height:'100%'}}>
                    <Text>Back Button </Text>
                    <Text>Ravi Yadav</Text>
                </View>
            </View>
            <ScrollView>
            <View style={{padding:'5%'}}>
                {arr.map((element)=>{
                    return(
                        <View style={{marginBottom:'5%'}}>
                        <AccountCard />
                        </View>
                    )
                })
                }
            </View>
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height:'10%', borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, backgroundColor: 'skyblue', paddingHorizontal: '5%'
    }
})

export default Accounts;