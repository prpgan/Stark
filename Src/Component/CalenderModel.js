import React, {useState} from 'react';
import {  Alert,Image,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View } from 'react-native'
import CustomButton from './CustomButton';
import CalenderComp from '../Component/CalenderComp';
const CustomAlertModel = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={{backgroundColor:'green',flex:1}}>
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
              {/* <Text>Calender</Text> */}
            <View style={{marginHorizontal:'5%'}}>
            <CalenderComp />
            <View style={{alignItems:'center'}}>
            <CustomButton 
            buttonwidth="50%"
            buttonText="Apply Date"  
            // textColor="grey" 
            onPress={()=>setModalVisible(!modalVisible)}
            />
            </View>
            </View>
          </View>
        </View>
      </Modal>                
        </View>
    )
}

export default CustomAlertModel

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "center",
        // marginTop: 22
      },
      modalView: {
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height:'60%',
        justifyContent:'center',
        // alignItems:'center'
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
