import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,StatusBar, KeyboardAvoidingView,Image,ImageBackground, TextInputComponent,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SimpleReactValidator from 'simple-react-validator';
import Image_01 from '../../assets/Image_01.png';

const onFormsubmit = (props)=>{
    props.navigation.navigate('TabScreens')   
}

const Login = (props) => {
    const simpleValidator = useRef(new SimpleReactValidator())
    const [value, setValue] = useState(null);
    const [country, setCountry] = useState('uk');
    const [items, setItems] = useState([
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2', selected: true, disabled: true },
    ]);
    return (
        // <KeyboardAvoidingView style={{flex:1}}>
        <View style={{flex:1}}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <ScrollView contentContainerStyle={{flex:1}}>
        <ImageBackground source={Image_01} style={{flex:1,justifyContent:'flex-end',backgroundColor:'skyblue',resizeMode: "cover"}}>
      {/* <Text style={{alignSelf:'center'}}>Name</Text> */}
      {/* <View style={{justifyContent:'center',alignItems:'center'}}><Image source={Image_01} style={{height:30,width:30}} /></View> */}
      <View style={{padding:"5%",borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:'green'}}>
      <View>
    <CustomTextInput
    //    upperText ="Mobile"
       placeholder="Mobile"
       term={value}
       onTermSbumitted ={()=>onFormsubmit()}
       onBlur = {simpleValidator.current.showMessageFor('Mobile')}
       onChangeTerm = {(data)=>setValue(data)}
       />
       </View> 
      {<Text style={{color:'red'}}>{simpleValidator.current.message('Mobile',value, 'required|phone')}</Text>}
      <View style={{flexDirection:'row',marginHorizontal:'15%',marginTop:'10%'}}>
      <Text>Don't Have Account?</Text>
      <TouchableOpacity onPress={()=> props.navigation.navigate('TabScreens')  }>
          <Text style={{color:'skyblue'}}>Register</Text>
      </TouchableOpacity>
      </View>
  </View>
  </ImageBackground>
  </ScrollView>
</View>
// </KeyboardAvoidingView>
)
}

export default Login

const styles = StyleSheet.create({})
