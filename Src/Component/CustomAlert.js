import React, {useState} from 'react';
import {  Alert,Image,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View } from 'react-native'
import CustomButton from '../Component/CustomButton';
const CustomAlert = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{position:'absolute'}}>
                <Image style={{width:20,height:20,backgroundColor:'red'}} 
                source={require('../assets/Image_01.png')}
                />
            </View>
            <Text style={{fontSize:23,alignSelf:'center'}}>Confirm</Text>
            <View style={{marginVertical:'3%',alignItems:'center'}}>
            <Image style={{width:70,height:70}} source={require('../assets/Image_01.png')}/>
            </View>
            <View style={{alignItems:'center'}}>
            <Text>Are you sure You want to save</Text>
            </View>
            <View style={{flexDirection:'row',marginVertical:'5%'}}>
            <CustomButton onPress={()=>setModalVisible(!modalVisible)}/>
            <CustomButton 
            buttonText="No" 
            backgroundColor= "#fff" 
            textColor="grey" 
            onPress={()=>setModalVisible(!modalVisible)}
            />
            </View>
          </View>
        </View>
      </Modal>                
        </View>
    )
}

export default CustomAlert

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
        // marginTop: "40%",
        // alignItems: "center",
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
      }
})
