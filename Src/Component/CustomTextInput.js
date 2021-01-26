import React from 'react'
import { View, Text, Image, StyleSheet,TextInput } from 'react-native';
// const imageSrc = ""
import Feather from 'react-native-vector-icons/Feather';

export default function CustomTextInput({ onBlur,upperText, imageSrc,editable, placeholder, term, onChangeTerm, onTermSbumitted, keyboardType }) {
    return (
        <View>
            <View style={{marginBottom:"2%"}}>
            {upperText?<Text>{upperText}</Text>:null}
            </View>
            <View style={Styles.formItem}>
                <View style={Styles.imageViewStyles} >
                    {/* <Image source={require(`'${imageSrc}'`)} /> */}
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                </View>
                <View style={{width:'90%'}}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={term}
                        editable = {editable == "false"?false:true}
                        // style={{width:'100%'}}
                        onChangeText={(newChange) => onChangeTerm(newChange)}
                        placeholder={placeholder}
                        placeholderTextColor='grey'
                        onSubmitEditing={(submiterm) => onTermSbumitted(submiterm)}
                        onBlur = {onBlur}
                        keyboardType = {keyboardType}
                    />
                </View>
                {/* <View style={Styles.formItem1}>
                            <View>
                                <Image />
                                <TextInput 
                                placeholder="Full Name here"
                                />
                            </View>
                </View> */}
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    formItem: {
        borderColor:'grey',borderWidth:1,flexDirection:'row',borderRadius:5
    },
     imageViewStyles:{alignSelf:'center',marginHorizontal:'2%'},
     formItem1: {
        marginBottom:10, borderColor:'black',borderWidth:1
    },
})
