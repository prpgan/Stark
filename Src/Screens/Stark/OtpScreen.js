import React, { useState, useRef } from 'react'
import {StyleSheet, Text, View, StatusBar, Image, TextInputComponent,ScrollView,TouchableOpacity } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpScreen = () => {
    const arr = [10,20,5,1,5,6]
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
            <View style={styles.container}>
                <Text>Image</Text>
            </View>
            <View style={{flex:1,padding:'5%'}}>
                <View style={{alignItems:'center'}}><Text style={{fontWeight:'bold'}}>Verify With OTP</Text></View>
                <View style={{alignItems:'center'}}><Text style={{color:'grey'}}>Sent Sms to 85632584</Text></View>
                <View style={{borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                <OTPInputView
                    style={{width: '80%', height: 50}}
                    pinCount={4}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    placeholderCharacter={'*'}
                    placeholderTextColor={'red'}
                    selectionColor={"#000000"}
                    placeholderTextColor = "#000"
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
                </View>
                <View style={{alignItems:'center'}}>
                    <Text>
                        Timer
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text>
                        Didn't Receive the Verification OTP?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color:'skyblue'}}> Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height:'40%', backgroundColor: 'skyblue', paddingHorizontal: '5%',marginTop:'8%'
    },borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: "#000",
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#000",
      }
})

export default OtpScreen;