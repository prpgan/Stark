/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
            <View style={styles.header}>
              <View style={styles.headerItem}>
                <Text style={styles.Text}>{"<--"}</Text>
                <Text style={styles.Text}>30 Jan 2021</Text>

                <View style={styles.circle}></View>
              </View>

              <View style={styles.monthYearContainer}>
                <View style={styles.month}>
                  <Item>
                    <Input
                      placeholder=" Search"
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: hp('1%'),
                        borderWidth: hp('0.1%'),
                        borderColor: 'gray',
                      }}
                    />
                    {/* <Icon active name='swap' /> */}
                  </Item>
                </View>

                <View style={styles.year}>
                  <Item>
                    <Input
                      placeholder="   Icon"
                      style={{
                        width: hp('20%'),
                        backgroundColor: '#fff',
                        borderRadius: hp('1%'),
                        borderRadius: hp('1%'),
                        borderWidth: hp('0.1%'),
                        borderColor: 'gray',
                      }}
                    />
                    {/* <Icon active name='swap' /> */}
                  </Item>
                </View>
              </View>
            </View>
         

            <View style={{padding: hp('1%'), marginTop: hp('3%')}}>
              <Card style={styles.cardContainer}>
                {/* <CardItem> */}
                {/* <Body> */}
                <View style={styles.card}>
                  <View
                    style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                  <View style={styles.custFirst}>
                    <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer location</Text>
                  </View>

                  <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
                </View>
                {/* </Body> */}
                {/* </CardItem> */}
              </Card>
              {/* </View> */}

              {/* <View style={{margin:hp('1%')}}>  */}
              <Card style={styles.cardContainer}>
                {/* <CardItem> */}
                {/* <Body> */}
                <View style={styles.card}>
                  <View
                    style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                  <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer location</Text>
                  </View>

                  <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
                </View>
                {/* </Body> */}
                {/* </CardItem> */}
              </Card>
              {/* </View> */}

              {/* <View style={{margin:hp('1%')}}>  */}
              <Card style={styles.cardContainer}>
                {/* <CardItem> */}
                {/* <Body> */}
                <View style={styles.card}>
                  <View
                    style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                  <View style={styles.custFirst}>

                  <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer location</Text>
                  </View>

                  <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
                </View>
                {/* </Body> */}
                {/* </CardItem> */}
              </Card>
              {/* </View> */}

              {/* <View style={{margin:hp('1%')}}>  */}
              <Card style={styles.cardContainer}>
                {/* <CardItem> */}
                {/* <Body> */}
                <View style={styles.card}>
                  <View
                    style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                  <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer location</Text>
                  </View>

                  <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
                </View>
                {/* </Body> */}
                {/* </CardItem> */}
              </Card>
              {/* </View> */}

              {/* <View style={{margin:hp('1%')}}>  */}
              <Card style={styles.cardContainer}>
                {/* <CardItem> */}
                {/* <Body> */}
                <View style={styles.card}>
                  <View
                    style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                  <View style={styles.custFirst}>
                  <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer name</Text>
                    <Text style={styles.Text}>customer location</Text>
                  </View>

                  <View style={styles.custLast}>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>somthing</Text>
                  <Text style={styles.Text}>customer </Text>
              </View>
                </View>
                {/* </Body> */}
                {/* </CardItem> */}
              </Card>
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
    backgroundColor: 'lightgreen',
    padding: hp('2%'),
    height: hp('14%'),
    borderBottomLeftRadius: hp('10%'),
    borderBottomRightRadius: hp('10%'),
  },
  headerItem: {
    padding: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  circle: {
    height: hp('4%'),
    width: wp('8%'),
    borderRadius: hp('2%'),
    backgroundColor: '#fff',
    // alignItems:'center',
    // textAlign:'center'
  },
  monthYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding:10,
    padding: hp('2%'),
    // marginBottom:hp('40%')
  },
  month: {
    width: wp('60%'),

    // alignItems:'center'
  },
  year: {
    alignItems: 'center',
    width: wp('18%'),
  },
  values: {
    alignItems: 'center',
    padding: hp('2%'),
  },
  valueText: {
    fontSize: hp('5%'),
  },
  headerBottomContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp('2%'),
    borderRadius: hp('1%'),
  },
  headerBottom: {
    marginTop: hp('2%'),
  },
  milk: {
    fontSize: hp('2%'),
  },
  milkText: {
    fontSize: hp('1.9%'),
  },
  headerBottomItem: {alignItems: 'center'},

  smallText: {fontSize: hp('1.5%')},

  sContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp('2.5%'),
  },
  sCon: {
    alignItems: 'center',
    padding: hp('1.5%'),
    borderRadius: hp('1%'),
  },
  container: {
    backgroundColor: '#fff',
  },
  cardContainer: {
    padding: hp('1%'),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Text: {
    fontSize: hp('2%'),
  },
  custFirst: {
    padding: hp('2%'),
  },
  custLast:{
    backgroundColor:"lightgreen",
    padding:hp('2%'),
    borderTopLeftRadius:hp('3%'),
    borderBottomEndRadius:hp('3%')
  },
});

export default App;
