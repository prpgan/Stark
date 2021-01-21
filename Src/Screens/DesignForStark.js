import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleReactValidator from 'simple-react-validator';

export default class DesignForStark extends Component {
    constructor(){
        super();
        this.validator = new SimpleReactValidator();
        this.state={
            email :''
        }
    }

    submitForm() {
        if (this.validator.allValid()) {
          alert('You submitted the form and stuff!');
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
          this.forceUpdate();
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Confirm Your Password"
                style={styles.textInput}
                autoCapitalize="none"
                value = {this.state.email}
                onChangeText={(val) => this.setState({email: val})}
            />
            <TouchableOpacity
                onPress= {()=>alert("Pressed")}
            >
                 <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
            </TouchableOpacity>
            </View>
            <Text>{this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}</Text>
            <View>
                <TouchableOpacity onPress={()=>this.submitForm()}><Text>Submit</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      marginLeft:'10%',
      borderColor:'black',
      borderWidth:1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft:10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });