
import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

import CustomTextInput from '../../Component/CustomTextInput';  
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


const {width, height} = Dimensions.get('window');
const App = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="skyblue" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{ backgroundColor: 'skyblue', flexDirection: 'row', justifyContent: 'space-between', height: '10%', alignItems: 'center', padding: hp('2%'),    borderBottomLeftRadius: hp('3%'),
    borderBottomRightRadius: hp('3%') }}>
            <Text style={{fontSize:20,color:'#fff'}}>Ravi Yadav</Text>
            <Menu>
      <MenuTrigger>
      <Feather
                        name="more-vertical"
                        color="#fff"
                        size={25}
                    />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Delete`)}><Text style={{color: 'grey'}}>Delete Customer</Text></MenuOption>
        <MenuOption onSelect={() => alert(`Inactive`)} ><Text style={{color: 'grey'}}>Inactive Customer</Text></MenuOption>
      </MenuOptions>
    </Menu>
          </View>
          <View style={styles.container}>
            <Text style={styles.headerText}>Personal Info</Text>
            <View style={styles.inputs}>
              <CustomTextInput 
              upperText ="Full Name"
              iconName ="user"
              />
            </View>
            <View style={styles.inputs}>
            <CustomTextInput 
              upperText ="Mobile No"
              />
            </View>
            <Text style={[styles.headerText,{marginTop:hp('2%')}]}>Address</Text>

            <View style={styles.inputs}>
            <CustomTextInput 
              upperText ="Area"
              iconName = "map-pin"
              />
            </View>

            <View style={styles.inputs}>
            <CustomTextInput 
              upperText ="Location"
              iconName = "map-pin"
              />
            </View>
            <Text style={[styles.headerText,{marginTop:hp('2%')}]}>Milk Details</Text>
         
          <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              <View style={{padding:hp('1%'),}}><Text>Milk Type</Text><Text>Caw</Text><Text>Buffalo</Text><Text>Desi Caw</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%')}}><Text>Quantity</Text><Text>+ 125 -</Text><Text>+ 000 -</Text><Text>+ 1 -</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%'),}}><Text>Price/lit</Text><Text>45</Text><Text>50</Text><Text>55</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%'),}}><Text>Delivery</Text></View>
          </View>
          <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              <View style={{padding:hp('1%'),}}><Text>Milk Type</Text><Text>Caw</Text><Text>Buffalo</Text><Text>Desi Caw</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%')}}><Text>Quantity</Text><Text>+ 125 -</Text><Text>+ 000 -</Text><Text>+ 1 -</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%'),}}><Text>Price/lit</Text><Text>45</Text><Text>50</Text><Text>55</Text></View>
              <View style={{borderLeftWidth:hp('0.1%')}}/>
              <View style={{padding:hp('1%'),}}><Text>Delivery</Text></View>
          </View>
          <View style={{marginBottom:'20%'}}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// container: { flex: 1 },
// textWrapper: {
//   height: hp('70%'), // 70% of height device screen
//   width: wp('80%')   // 80% of width device screen
// },
// myText: {
//   fontSize: hp('5%') // End result looks like the provided UI mockup
// }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: '#fff',
    padding: hp('2%'),
  },
  headerText: {fontSize: hp('3%')},
  inputs: {marginTop: hp('2%')},
});

export default App;
