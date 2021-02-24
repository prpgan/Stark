import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const  BottomNavigator = ({onCurrentPress,onHomePress,onSearchPress, onMenuPress, onSettingPress}) =>  {

const toggleOpen = () => {
        alert("Pressed")
    }

        return (
            <View style={{
                // flex: 1,
                flexDirection: 'column',
                backgroundColor: 'grey',
                alignItems:'flex-end'
            }}>
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'grey',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10
                }}>
                    <TouchableWithoutFeedback onPress={()=>toggleOpen()}>
                        <View style={[styles.button, styles.actionBtn]}>
                        <View style={{alignSelf:'center'}}>
                        <MaterialIcons 
                            name="add"
                            size={25}
                            />
                            </View>
                            {/* <Image style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                                source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }} /> */}
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{
                    // position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25
                }}>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                        <View style={{alignSelf:'center'}}>
                        <FontAwesome 
                            name="home"
                            size={25}
                            color={onCurrentPress=="Home"?"skyblue":"grey"}
                            />
                            </View>
                            {/* <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}
                                onPress={()=>{Alert.alert("")}}
                            >
                            </Image> */}
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginRight:70
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                        <View style={{alignSelf:'center'}}>
                        <FontAwesome 
                            name="search"
                            size={25}
                            color={onCurrentPress=="Search"?"skyblue":"grey"}
                            />
                            </View>
                            {/* <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}
                                onPress={()=>{Alert.alert("")}}
                            >
                            </Image> */}
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Search</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                        <View style={{alignSelf:'center'}}>
                        <MaterialIcons 
                            name="menu"
                            size={25}
                            color={onCurrentPress=="Menu"?"skyblue":"grey"}
                            />
                            </View>
                            {/* <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}
                                onPress={()=>{Alert.alert("")}}
                            >
                            </Image> */}
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Menu</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <View style={{alignSelf:'center'}}>
                        <MaterialIcons 
                            name="settings"
                            size={25}
                            color={onCurrentPress=="Setting"?"skyblue":"grey"}
                            />
                            </View>
                            {/* <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}
                                onPress={()=>{Alert.alert("")}}
                            >
                            </Image> */}
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Setting</Text>
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                </View>
            </View>
        );
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
    },
    actionBtn: {
        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }
});

export default BottomNavigator;