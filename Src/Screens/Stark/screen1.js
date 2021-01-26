/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor="red"  />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.container}>
            <View style={styles.header}>
             
              <View style={styles.headerItem}>
                <Text style={styles.Text}>header</Text>
              <View style={styles.circle}>
              </View>
              </View>

                <View style={styles.dateContainer}>
                  <Text style={styles.Text}> {"<   Today    >"} </Text>
                </View>

                <View style={styles.values}>
                  <Text style={styles.valueText}> 180 </Text>
                  <Text style={styles.Text}> some text here </Text>

                </View>

                <View style={styles.milkRate}>
                  <Text style={styles.milkText}> Milk Rate </Text>
                    <View style={styles.milkContainer}>
                        <Text style={styles.milk}>$49</Text>
                        <Text style={styles.milk}>$59</Text>
                        <Text style={styles.milk}>$55</Text>

                    </View>
                </View>
            </View>

            <View style={styles.sContainer}>
              <View style={[styles.sCon,{backgroundColor:"orange"}]}>
                <Text style={styles.Text}>Icon</Text>
                <Text style={styles.Text}>something here</Text>
              </View>
            <View>
              <View  style={styles.sCon}>
                <Text style={styles.Text}>20,000</Text>
                <Text style={styles.Text}>something here</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.Text,{paddingLeft:30}]}>New Customers</Text>

        <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={[styles.circle,{backgroundColor:'gray'}]}>
              </View>
              <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                  <Text style={styles.Text}>customer mobile</Text>
                  <Text style={styles.Text}>customer location</Text>
              </View>

              <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
            </View>
        </View>

        <View style={[styles.cardContainer,{paddingTop:0}]}>
            <View style={styles.card}>
            <View style={[styles.circle,{backgroundColor:'gray'}]}>
              </View>
              <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                  <Text style={styles.Text}>customer mobile</Text>
                  <Text style={styles.Text}>customer location</Text>
              </View>

              <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
            </View>
        </View>

        <View style={[styles.cardContainer,{paddingTop:0}]}>
            <View style={styles.card}>
            <View style={[styles.circle,{backgroundColor:'gray'}]}>
              </View>
              <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                  <Text style={styles.Text}>customer mobile</Text>
                  <Text style={styles.Text}>customer location</Text>
              </View>

              <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
            </View>
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
  header: {
    backgroundColor: 'orange',
    padding: hp('2%'),
    height: hp('45%'),
    borderBottomLeftRadius: hp('4%'),
    borderBottomRightRadius: hp('4%')
  },
  headerItem:{
    borderBottomWidth:hp('0.1%'),
    padding:hp('1%'),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  circle:{
    height:hp('4%'),
    width:wp('8%'),
    borderRadius:hp('2%'),
    backgroundColor:'red',
    // alignItems:'center',
    // textAlign:'center'
  },
  dateContainer:{
    alignItems:'center',
    // padding:10,
    padding:hp('1%'),
  },  
  values:{
    alignItems:'center',
    padding:hp('2%'),
  },
  valueText:{
    fontSize:hp('6%')
  },
  milkContainer:{
    backgroundColor:'#fff',
flexDirection:'row',
justifyContent:'space-between',
padding:hp('2%'),
borderRadius:hp('1%')
  },
  milkRate:{
    marginTop:hp('5%')
  },
  milk:{
    fontSize:hp('2%')
  },
  milkText:{
    fontSize:hp('1.9%')
  },
  sContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    padding:hp('2.5%')
  },
  sCon:{
    alignItems:'center',
    padding:hp('1.5%'),
    borderRadius:hp('1%')
  },
  container: {
    backgroundColor: '#fff',
    
  },
  cardContainer:{
    padding:hp('2%')
  },
  card:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
  },
  custLast:{
    backgroundColor:"orange",
    padding:hp('2%'),
    borderTopLeftRadius:hp('3%'),
    borderBottomEndRadius:hp('3%')
  },
  Text:{
    fontSize:hp('2%')
  },
  custFirst:{
    padding:hp('2%')
  }
});

export default App;
