import React, { useState, useCallback } from 'react';

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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Picker,Card,Body ,CardItem} from "native-base"
import { color } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const data =[1,2,3,3,4,5]
  const month =[{label:"Jan",value:"Jan"},{label:"Feb",value:"Feb"},{label:"Mar",value:"Mar"},{label:"April",value:"April"},{label:"May",value:"May"},{label:"Jun",value:"Jun"},{label:"July",value:"July"},{label:"Aug",value:"Aug"},{label:"Sept",value:"Sept"},{label:"Oct",value:"oct"},{label:"Nov",value:"Nov"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"},{label:"Dec",value:"dec"}]
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="skyblue" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerItem}>
                <Text style={[styles.Text,{color:'#fff'}]}>All billing Details</Text>
                <View style={styles.circle}></View>
              </View>

              <View style={styles.monthYearContainer}>
                <View style={styles.month}>
                  <Text style={[styles.milk,{color:'#fff'}]}>Month</Text>
                <View style={{backgroundColor:"#fff",height:hp('5%'),borderRadius:hp('0.8%')}}> 
                <Picker
              note
              mode="dropdown"
              style={{ width: wp('33%') ,borderRadius:hp('0.8%'),height:hp('5%')}}
              selectedValue={'test'}
              // onValueChange={this.onValueChange}
            >
              {
                month.map((element)=>{
                  return(
                    <Picker.Item label={element.label} value={element.value} />
                  )
                })
            }
            </Picker>
            </View>
                </View>

                <View style={styles.year}>
                  <Text style={[styles.milk,{color:'#fff'}]}>Year</Text>
                  <View style={{backgroundColor:"#fff",borderRadius:hp('0.8%'),height:hp('5%')}}> 
                  <Picker
              note
              mode="dropdown"
              style={{ width: wp('33%') ,borderRadius:hp('0.8%'), height:hp("5%")}}
              selectedValue={'test'}
              // onValueChange={this.onValueChange}
            >
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
            </Picker>
            </View>
                </View>
              </View>

              <View style={styles.values}>
                <Text style={styles.valueText}>$ 13000 </Text>
                <Text style={[styles.Text,{color:'#fff'}]}> Total </Text>
              </View>

              <View style={styles.headerBottom}>
                <View style={styles.headerBottomContainer}>
                  <View style={styles.headerBottomItem}>
                  <Text style={styles.smallText}>All</Text>
                  <Text style={styles.milk}>$49</Text>
                </View>
                <View style={{borderRightWidth:1}} />
                <View style={styles.headerBottomItem}>
                  <Text style={styles.smallText}>Paid</Text>
                  <Text style={styles.milk}>$40</Text>
                </View>
                <View style={{borderRightWidth:1}} />

               
                <View style={styles.headerBottomItem}>
                  <Text style={styles.smallText}>Unpaid</Text>
                  <Text style={styles.milk}>$10</Text>
                </View>
                </View>
              </View>
            </View>

            <View style={{padding:hp('1%')}}> 
            {
              data.map(()=>{
                return(
                  <Card style={styles.cardContainer}>
                  <View style={styles.card}>
                    <View style={[styles.circle, {backgroundColor: 'gray'}]}></View>
                    <View style={styles.custFirst}>
                      <Text style={styles.Text}>Ravi Yadav</Text>
                      <Text style={styles.Text}>9823504120</Text>
                    </View>
    
                    <View style={styles.custLast}>
                      <Text style={styles.Text}> 2000</Text>
                      <Text style={styles.Text}>mph </Text>
                    </View>
                  </View>
              </Card>
                )
              })
            }
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
    backgroundColor: 'skyblue',
    padding: hp('2%'),
    height: hp('45%'),
    borderBottomLeftRadius: hp('4%'),
    borderBottomRightRadius: hp('4%'),
  },
  headerItem: {
    borderBottomColor:'grey',
    borderBottomWidth: hp('0.1%'),
    padding: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    height: hp('4%'),
    width: wp('8%'),
    borderRadius: hp('2%'),
    backgroundColor: 'gray',
    // alignItems:'center',
    // textAlign:'center'
  },
  monthYearContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    // padding:10,
    padding: hp('2%'),
  },
  month:{
    alignItems:'center'
  },
  year:{
    alignItems:'center'
  },
  values: {
    alignItems: 'center',
    padding: hp('1%'),
  },
  valueText: {
    fontSize: hp('5%'),color:'#fff'
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
  headerBottomItem:{ alignItems:'center'},

  smallText:{fontSize: hp('1.5%')},

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
    borderRadius:10
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  custLast: {
    backgroundColor: 'skyblue',
    padding: hp('2%'),
    borderTopLeftRadius: hp('9%'),
    borderBottomEndRadius: hp('1%'),
    borderTopRightRadius:hp('1%'),
    borderBottomLeftRadius:hp('1%'),
    paddingHorizontal:wp('12%')
  },
  Text: {
    fontSize: hp('2%')
  },
  custFirst: {
    padding: hp('2%'),
  },
});

export default App;
