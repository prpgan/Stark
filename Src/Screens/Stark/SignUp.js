import React, { Component, useState,useRef } from 'react';
import { AsyncStorage, View, ScrollView, Text, Image, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, StatusBar, ImageBackground, TextInputComponent } from 'react-native';
import { Item, Input, Label } from 'native-base';
import Image_01 from '../../assets/Image_01.png';
import { color } from 'react-native-reanimated';
import CustomButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextInput';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { Container, Header, Content, ListItem, CheckBox, Body, Radio } from 'native-base';
import SimpleReactValidator from 'simple-react-validator';


const SignUpForStark = () => {
  const simpleValidator = useRef(new SimpleReactValidator())
  const [value, setValue] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('uk');
  const [items, setItems] = useState([
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2', selected: true, disabled: true },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <ImageBackground style={styles.bgImage} source={Image_01}  >
        </ImageBackground>
      </View>
      <View style={styles.bodyContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput 
        placeholder="Full Name" 
        upperText="Full Name"
        term={name}
        onBlur = {simpleValidator.current.showMessageFor('name')}
        onChangeTerm = {(data)=>setName(data)}
        />
        {<Text style={{color:'red'}}>{simpleValidator.current.message('name',name, 'required|string|min:2')}</Text>}
        <CustomTextInput 
        placeholder="Enter No Here" 
        upperText="Mobiel Number"
        term={number}
        onBlur = {simpleValidator.current.showMessageFor('number')}
        onChangeTerm = {(data)=>setNumber(data)}
        />
        {<Text style={{color:'red'}}>{simpleValidator.current.message('number',number, 'required|phone')}</Text>}
        <View style={{marginTop:'5%'}}>
        <DropDownPicker
          searchable={true}
          searchablePlaceholder="Search for an item"
          searchablePlaceholderTextColor="gray"
          seachableStyle={{}}
          searchableError={() => <Text>Not Found</Text>}
          items={[
            { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
            { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
          ]}
          defaultValue={country}
          containerStyle={{ height: 50 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: 'red', height: 500, }}
          onChangeItem={item =>
            // alert(item) 
            setValue({
              country: item.value
            }
            )}
        />
        </View>
        <View style={styles.form}>
          <Text>Milk</Text>
          <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:'3%' }}>
          <View style={styles.CheckBoxViewStyle}>
          <View style={{paddingRight:'10%'}}><CheckBox style={styles.CheckBoxStyle} checked={true} /></View>
            <Text>Cow</Text>
          </View> 
          <View style={styles.CheckBoxViewStyle}>
          <View style={{paddingRight:'10%'}}><CheckBox style={styles.CheckBoxStyle} checked={true} /></View>
            <Text>Buffalo</Text>
          </View>  
          <View style={styles.CheckBoxViewStyle}>
          <View style={{paddingRight:'10%'}}><CheckBox style={styles.CheckBoxStyle} checked={true} /></View>
            <Text>Desi Cow</Text>
          </View>   
          </View>
          <View style={{ flexDirection: 'row' }}>
          <View style={{flexDirection:'row',marginVertical:'5%'}}>
          <Radio selected={false} />
            <Text></Text>
            <Text>I agree to the</Text>
            <TouchableOpacity><Text> Terms of use</Text></TouchableOpacity>
            <Text> &</Text>
            <TouchableOpacity><Text> Privacy Policy</Text></TouchableOpacity>
          </View> 
          </View>
            <CustomButton
              buttonText="Next"
              onPress={()=>alert("Pressed")}
            />
        </View>
    </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: "100%"
  },
  bgImage: {
    flex: 7,
    width: "100%",
  },
  bodyContainer: {
    flex: 7,
    paddingTop: 20,
    padding: 20,
    marginTop: -20,
    backgroundColor: 'green',
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
    marginTop: 15, backgroundColor: 'green'
  },
  formItem: {
    marginBottom: 10, borderColor: 'black', borderWidth: 1
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
    height: 300
  },
  homeView: {
    alignItems: 'center',
    justifyContent: 'center'
  }, CheckBoxViewStyle:{
    flexDirection:'row',
    // justifyContent:'space-between'
  }, CheckBoxStyle:{
    alignSelf:'flex-start',marginLeft:'5%'
  }

})

export default SignUpForStark;