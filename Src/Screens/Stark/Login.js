import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,StatusBar, Image, TextInputComponent,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SimpleReactValidator from 'simple-react-validator';


const onFormsubmit = ()=>{

}

const Login = () => {
    const simpleValidator = useRef(new SimpleReactValidator())
    const [value, setValue] = useState(null);
    const [country, setCountry] = useState('uk');
    const [items, setItems] = useState([
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2', selected: true, disabled: true },
    ]);
    return (
        <View style={{flex:1, marginTop:'5%'}}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        {/* <ScrollView> */}
  <View style={{height:'80%',backgroundColor:'skyblue'}}>
      <Text>Name</Text>
  </View>
  <View style={{padding:"5%",borderRadius:30,backgroundColor:'green'}}>
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
      <View style={{flexDirection:'row',marginHorizontal:'15%',marginVertical:'10%'}}>
      <Text>Don't Have Account?</Text>
      <TouchableOpacity onPress={()=>onFormsubmit()}>
          <Text style={{color:'skyblue'}}>Register</Text>
      </TouchableOpacity>
      </View>
  </View>
  {/* </ScrollView> */}
</View>
)
}

export default Login

const styles = StyleSheet.create({})
