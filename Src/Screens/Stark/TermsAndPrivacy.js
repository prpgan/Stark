import React, { useState, useCallback } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { color } from 'react-native-reanimated';

const TermsAndPrivacy = () => {
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
                <TouchableOpacity> 
                <Menu>
      <MenuTrigger  
              text = {"<=========="}
              customStyles={{
                triggerText:{color:'#fff'}
              }}
      />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
                  </TouchableOpacity>
                <Text style={[styles.Text,{color:'#fff',paddingLeft:wp("2%"),fontSize:hp('3%')}]}>Terms Of Use</Text>
                {/* <View style={styles.circle}></View> */}
              </View>
            </View>

            <View style={{padding:hp('3%')}}> 
               <Text style={{fontSize:28}}>H1. Heading</Text>
               <Text style={{fontSize:25}}>H2. Heading</Text>
               <Text style={{fontSize:23}}>H3. Heading</Text>
               <Text>H4. Whats is the lumsum has to do with stock market an an fkd kn?</Text>
               <Text>H4. OrderedList</Text>
               <Text style={styles.tcL}>{'\u2022'} The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
          <Text style={styles.tcL}>{'\u2022'} The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
          <Text style={styles.tcL}>{'\u2022'} The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
          <Text style={styles.tcL}>{'\u2022'} The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
          <Text style={styles.tcL}>{'\u2022'} The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
          <Text style={styles.tcL}>{'\u2022'} The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
          
          <Text >H5. OrderedList</Text>
          <Text style={styles.tcL}>1. The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
          <Text style={styles.tcL}>2. The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
          <Text style={styles.tcL}>3. The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
          <Text style={styles.tcL}>4. The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
          <Text style={styles.tcL}>5. The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
          <Text style={styles.tcL}>6. The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
        </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: 'skyblue',
    padding: hp('2%'),
    height: hp('10%'),
    borderBottomLeftRadius: hp('3%'),
    borderBottomRightRadius: hp('3%'),
  },
  headerItem: {
    padding: hp('1%'),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    fontSize: hp('2%')
  },
  custFirst: {
    padding: hp('2%'),
  },
  title: {
    fontSize: 22,
    alignSelf: 'center'
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  },
  tcP: {
    marginTop: 10,
    fontSize: 12
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    // fontSize: 
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * .7
  }
});

export default TermsAndPrivacy;
