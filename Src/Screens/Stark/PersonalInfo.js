
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
import {
  Picker,
  Card,
  Body,
  CardItem,
  Header,
  Item,
  Icon,
  Input,
  Button,
} from 'native-base';

const {width, height} = Dimensions.get('window');
const App = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="red" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Personal Info</Text>
            <View style={styles.inputs}>
              <Text>Full Name</Text>
              <Item regular>
                {/* <Icon active name='home' /> */}
                <Input placeholder="Regular Textbox" style={{}} />
              </Item>
            </View>

            <View style={styles.inputs}>
              <Text>Mobile Number</Text>
              <Item regular>
                {/* <Icon active name='home' /> */}
                <Input placeholder="Regular Textbox" />
              </Item>
            </View>

            <Text style={[styles.headerText,{marginTop:hp('2%')}]}>Address</Text>

            <View style={styles.inputs}>
              <Text>Area</Text>
              <Item regular>
                {/* <Icon active name='home' /> */}
                <Input placeholder="Regular Textbox" style={{}} />
              </Item>
            </View>

            <View style={styles.inputs}>
              <Text>Location</Text>
              <Item regular>
                {/* <Icon active name='home' /> */}
                <Input placeholder="Regular Textbox" />
              </Item>
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
