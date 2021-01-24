// import React, { Component } from 'react';
// import { ImageBackground, Text, View } from 'react-native';

// export default class SignUp extends Component {
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 {/* <ImageBackground> */}
//                 <View style={{flex:3,backgroundColor:'yellow',height:"100%"}}>
//                 <View style={styles.bgImage}>
//                      <ImageBackground style={{flex:1,width}} source={Image_01}  >
//                      </ImageBackground>
//    </View>
//                 </View>
//                 <View style={{flex:4, backgroundColor:'green',borderTopLeftRadius:50,borderTopEndRadius:50}}>
//                     <Text>Lots of things</Text>
//                 </View>
//                 {/* </ImageBackground> */}
//             </View>
//         )
//     }
// }


import React, { Component } from 'react';
import { AsyncStorage, View,ScrollView, Text,Image,TextInput, StyleSheet, TouchableOpacity, ToastAndroid, StatusBar, ImageBackground, TextInputComponent } from 'react-native';
import { Item, Input, Label } from 'native-base';
import Image_01 from '../assets/Image_01.png';
import { color } from 'react-native-reanimated';
import CustomButton from '../Component/CustomButton'
import CustomTextInput from '../Component/CustomTextInput';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    static navigationOptions = {  
        header:null  
    };  

    componentWillMount() {
        AsyncStorage.setItem("Email", "a@a.com");
        AsyncStorage.setItem("Password", "a123");
    }

    onLogin = async () => {
        try {
            let isEmpty = this.validate(this.state.email);
            if (isEmpty && this.state.password) {
                let originalEmail = await AsyncStorage.getItem("Email");
                let originalPassword = await AsyncStorage.getItem("Password");
                console.log(this.state.email,this.state.password,originalEmail,originalPassword);
                if (this.state.email == originalEmail && this.state.password == originalPassword) {
                    (ToastAndroid.show("Login Successful", ToastAndroid.SHORT));
                    return this.props.navigation.navigate("MainScreen")
                } else {
                    return (ToastAndroid.show("Invalid Credentials", ToastAndroid.SHORT))
                }

            } else {
                if (this.state.email == '' && this.state.password == '') {
                    return (ToastAndroid.show('Please fill the credentials', ToastAndroid.SHORT))
                } else {
                    return (ToastAndroid.show('Please Enter Valid Credentials', ToastAndroid.SHORT))
                }
            }
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

    onForgotPassword = () => {
        let isEmpty = this.validate(this.state.email);
        if (isEmpty) {
            return alert("Forgot Password is pressed")
        } else {
            return (ToastAndroid.show('Email is incorrect', ToastAndroid.SHORT))
        }
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            // <ScrollView>
            <View style={styles.container}>
                <View style={styles.bgImage}>
                    <ImageBackground style={styles.bgImage} source={Image_01}  >
                    </ImageBackground>
                </View>
                <View style={styles.bodyContainer}>
                <CustomTextInput placeholder ="Full Name Here"/>
                    <View style={styles.form}>
                         <Text>Milk</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text>Cow</Text> 
                        <Text>Buffalo</Text> 
                        <Text>Desi Cow</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>I agree to the</Text>
                            <TouchableOpacity><Text> Terms of use</Text></TouchableOpacity>
                            <Text> &</Text>
                            <TouchableOpacity><Text> Privacy Policy</Text></TouchableOpacity>
                        </View>
                        <View>
                            <CustomButton 
                            onPress={alert("Pressed")}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
        height:"100%"
    },
    bgImage: {
        flex: 7,
        width: "100%",
    },
    bodyContainer: {
        flex:2,
        paddingTop: 50,
        padding: 20,
        marginTop: -20,

        backgroundColor: 'red',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    backImage: {
        position: 'absolute',
        height: 35,
        width: 35,
        top: 35,
        left: 10
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
    },
    smallText: {
        color: 'lightgrey'
    },
    form: {
        marginTop: 15, backgroundColor:'green'
    },
    formItem: {
        marginBottom:10, borderColor:'black',borderWidth:1
    },
    txtBtn: {
        color: '#50c878',
        fontWeight: 'bold',
        fontSize: 14
    },
    btnTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    btn: {
        borderRadius: 3,
        backgroundColor: '#50c878',
        padding: 6,
        paddingHorizontal: 30,
        marginTop: '10%'
    },
    btnContainer: {
        marginTop: '5%'

    },
    btnMainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    scrollViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 60,
        height:300
    },
    homeView: {
        alignItems: 'center',
        justifyContent: 'center'
    }

})