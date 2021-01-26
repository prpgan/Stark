import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TextInputComponent,ScrollView } from 'react-native'
import Calendar from '../../Component/CalenderComp';
import CardComponent from '../../Component/CartComponent';
import BillingCartComponent from '../../Component/BillingCartComponent';


const Calender = () => {
    return (
        <View style={{ flex: 1, marginTop: '5%' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
            <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, justifyContent: 'space-between', height: '10%', alignItems: 'center' }}>
                    <Text>Calender</Text>
                    <Text>Image</Text>
                </View>
            <View style={{marginTop:'5%'}}><Calendar /></View>
            <Text>Milk Delivered on 20-20-01</Text>
            <View>
                <CardComponent />
            </View>
            </View>
            <View style={{padding:'5%'}}>
            <Text style={{fontSize:20,color:'grey'}}>Leaves :  2 </Text>
            <View>
                <BillingCartComponent />
            </View>
            <View>
                <BillingCartComponent />
            </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default Calender;

const styles = StyleSheet.create({
    container:{
        height:'75%', borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, backgroundColor: 'skyblue', padding: '5%'
    }
})
