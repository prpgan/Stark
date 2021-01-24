import React from 'react'
import { StyleSheet, Text, View,StatusBar, Image, TextInputComponent } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextInput';

const Profile = () => {
    return (
        <View style={{flex:1, marginTop:'5%'}}>
                  <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={{flex:2,borderBottomLeftRadius:20,
                borderBottomRightRadius:20,backgroundColor:'skyblue',padding:'5%'}}>
                <View style={{borderBottomColor:'grey', borderBottomWidth:1,paddingVertical:'5%',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:20}}>Profile</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <View><Image style={{width:90,height:90}} source={require('../../assets/Image_01.png')}/></View>
                    <View style={{marginTop:"5%"}}><Text style={{color:'#fff',fontSize:15}}>Subscription Plan</Text></View>
                    <View><Text style={{color:'#fff',fontSize:15}}>22/12/2020 - 222/12/20221</Text></View>
                </View>
            </View>
            <View style={{flex:3, padding:"5%"}}>
                <View><CustomTextInput placeholder="Full Name" editable="false" /></View>   
                <View style={{marginTop:10}}><CustomTextInput placeholder="Mobile" editable="false" /></View> 
                <View style={{marginTop:10}}><CustomTextInput placeholder="Address" editable="false" /></View>
                <View style={{flexDirection:'row',paddingTop:'1%'}}>
                    <TouchableOpacity><Text style={{color:'skyblue'}}>Terms Of Use</Text></TouchableOpacity>
                    <Text style={{color:'grey'}}>  |  </Text>
                    <TouchableOpacity><Text style={{color:'skyblue'}}>Privacy Policy</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginVertical:'5%'}}>
                <CustomButton buttonText="Edit"/>
                <View style={{width:'10%'}}/>
                <CustomButton buttonText="Logout" backgroundColor="#fff" textColor="grey"/>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
