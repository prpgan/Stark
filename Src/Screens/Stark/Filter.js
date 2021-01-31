import React, {useState} from 'react';
import {  Alert,Image,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View } from 'react-native'
import {CheckBox} from 'native-base';
import CustomButton from '../../Component/CustomButton';

const Filter = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={{backgroundColor:'green',flex:1}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>
            <View style={styles.subContainer}>
            <View style={{paddingRight:'10%'}}><CheckBox /></View>
            <View><Text>|</Text></View>
            <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={require('../../assets/Image_01.png')}/>
            </View>
            <Text style={styles.textStyle}>Cow</Text>
            </View>
            </View>
            <View style={styles.container}>
            <View style={styles.subContainer}>
            <View style={{paddingRight:'10%'}}><CheckBox /></View>
            <View><Text>|</Text></View>
            <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={require('../../assets/Image_01.png')}/>
            </View>
            <Text style={styles.textStyle}>Buffalo</Text>
            </View>
            </View>
            <View style={styles.container}>
            <View style={styles.subContainer}>
            <View style={{paddingRight:'10%'}}><CheckBox /></View>
            <View><Text>|</Text></View>
            <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={require('../../assets/Image_01.png')}/>
            </View>
            <Text style={styles.textStyle}>Desi Cow</Text>
            </View>
            </View>
            <View style={styles.customButtonStyles}>
            <CustomButton 
            buttonText="Apply Filter" 
            // backgroundColor= "#fff" 
            textColor="#fff" 
            onPress={()=>setModalVisible(!modalVisible)}
            />
            </View>
          </View>
        </View>
      </Modal>                
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "center",
        // marginTop: 22
      },
      modalView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        // padding: 20,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      container:{
        marginVertical:'3%',borderBottomWidth:1,marginHorizontal:'30%',borderBottomColor:'grey'
      },
      subContainer:{
        flexDirection:'row',marginVertical:'10%'
      },
      customButtonStyles:{
        flexDirection:'row',marginVertical:'5%',justifyContent:'center'
      },
      textStyle:{
        paddingLeft:'3%',fontSize:18
      },
      imageStyle:{
        height:20,width:20          
      },
      imageViewStyle:{
        paddingHorizontal:'5%'
      }

})
