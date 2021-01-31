// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ListProducts from '../Screens/ListProducts';
// import AddressScreen from '../Screens/AddressScreen';
// import CartScreen from '../Screens/CartScreen';
// import CartIcon from '../Screens/CartIcon';
// import DesignForStark from '../Screens/DesignForStark';
// import SignUp from '../Screens/SignUp';
// import SignUpForStark from '../Screens/Stark/SignUp';
// import CustomTextInput from '../Component/CustomTextInput';
// import CustomAlert from '../Component/CustomAlert';
// import Profile from '../Screens/Stark/Profile';
// import DropDownPickerComp from '../Screens/Stark/DropDownPicker';
// import CartComponent from '../Component/CartComponent';
// import BillingCartComponent from '../Component/BillingCartComponent';
// import BillingDetails from '../Screens/Stark/BillingDetails';
// import EditProfile from '../Screens/Stark/EditProfile';
// import Login from '../Screens/Stark/Login';
// import Header from '../Component/Header';
// import CalenderComp from '../Component/CalenderComp';
// import Accounts from '../Screens/Stark/Accounts';
// import AccountsCard from '../Component/AccountsCard';
// import Calender from '../Screens/Stark/Calender';
// import OtpScreen from '../Screens/Stark/OtpScreen';
// import PersonalInfo from '../Screens/Stark/PersonalInfo';
// import Screen1 from '../Screens/Stark/screen1';
// import Screen2 from '../Screens/Stark/screen2';
// import Screen3 from '../Screens/Stark/screen3';
// import CalenderModek from '../Component/CalenderModel';
// import TableComp from '../Component/TableComp';
// const Stack = createStackNavigator();

// function Routes() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
//         <Stack.Screen name="BillingDetails" component={BillingDetails} options={{headerShown:false}} />
//         <Stack.Screen name="screen3" component={Screen3} options={{headerShown:false}} />
//       <Stack.Screen name="CalenderModek" component={CalenderModek} options={{headerShown:false}} />
//       <Stack.Screen name="TableComp" component={TableComp} options={{headerShown:false}} />
//       <Stack.Screen name="Alert" component={CustomAlert} options={{headerShown:false}} />
//         <Stack.Screen name="screen1" component={Screen1} options={{headerShown:false}} />
//         <Stack.Screen name="Personal" component={PersonalInfo} options={{headerShown:false}} />
//         <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}} />
//         <Stack.Screen name="Accounts" component={Accounts} options={{headerShown:false}} />
//         <Stack.Screen name="AccountsCard" component={AccountsCard} options={{headerShown:false}} />
//         <Stack.Screen name="Calender" component={Calender} options={{headerShown:false}} />
//         <Stack.Screen name="CalenderComp" component={CalenderComp} options={{headerShown:false}} />
//         <Stack.Screen name="Header" component={Header} options={{headerShown:false}} />
//         <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
//         <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
//         <Stack.Screen name="SignUpForStark" component={SignUpForStark} options={{headerShown:false}} />
//         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
//         <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
//         <Stack.Screen name="DropDown" component={DropDownPickerComp} options={{headerShown:false}} />
//         <Stack.Screen name="BillingCartComponent" component={BillingCartComponent} options={{headerShown:false}} />
//         <Stack.Screen name="CartComp" component={CartComponent} options={{headerShown:false}} />
//         <Stack.Screen name="Design" component={DesignForStark} options={{headerShown:false}} />
//         <Stack.Screen name="Custom" component={CustomTextInput} options={{headerShown:false}} />
//         <Stack.Screen name="List Products" component={ListProducts}    options={{
//           headerRight: () => (
//           <CartIcon />
//           ),
//         }}/>
//         <Stack.Screen name="Add Address" component={AddressScreen} />
//         <Stack.Screen name="Cart" component={CartScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// // export const AppContainer = createAppContainer(Routes);

// export default Routes ;




import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListProducts from '../Screens/ListProducts';
import AddressScreen from '../Screens/AddressScreen';
import CartScreen from '../Screens/CartScreen';
import CartIcon from '../Screens/CartIcon';
import DesignForStark from '../Screens/DesignForStark';
import SignUp from '../Screens/SignUp';
import SignUpForStark from '../Screens/Stark/SignUp';
import CustomTextInput from '../Component/CustomTextInput';
import CustomAlert from '../Component/CustomAlert';
import Profile from '../Screens/Stark/Profile';
import DropDownPickerComp from '../Screens/Stark/DropDownPicker';
import CartComponent from '../Component/CartComponent';
import BillingCartComponent from '../Component/BillingCartComponent';
import BillingDetails from '../Screens/Stark/BillingDetails';
import EditProfile from '../Screens/Stark/EditProfile';
import Login from '../Screens/Stark/Login';
import Header from '../Component/Header';
import CalenderComp from '../Component/CalenderComp';
import Accounts from '../Screens/Stark/Accounts';
import AccountsCard from '../Component/AccountsCard';
import Calender from '../Screens/Stark/Calender';
import OtpScreen from '../Screens/Stark/OtpScreen';
import PersonalInfo from '../Screens/Stark/PersonalInfo';
import Screen1 from '../Screens/Stark/screen1';
import Screen2 from '../Screens/Stark/screen2';
import Screen3 from '../Screens/Stark/screen3';
import CalenderModek from '../Component/CalenderModel';
import TableComp from '../Component/TableComp';
import Searchbar from '../Component/SearchBar';
import TermsAndPrivacy from '../Screens/Stark/TermsAndPrivacy';
import Filter from "../Screens/Stark/Filter";
import DatePickerExample from '../Component/DatePickerExample';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ScreenOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenOne!</Text>
    </View>
  );
}
function ScreenTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenTwo!</Text>
    </View>
  );
}
function ScreenThree() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenThree!</Text>
    </View>
  );
}

function ScreenFour({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenFour!</Text>
      <Button title="Go to Tab2" onPress={()=>navigation.navigate('TabScreens2')}/>
    </View>
  );
}
function ScreenFive() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenFive!</Text>
    </View>
  );
}

function TabScreens() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Screen" component={HomeScreen} />
        {/* <Tab.Screen name="Home" component={ScreenOne} /> */}
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        <Tab.Screen name="ScreenThree" component={ScreenThree} />
        <Tab.Screen name="ScreenFour" component={ScreenFour} />
      </Tab.Navigator>
  );
}


function TabScreens2() {
  return (
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={ScreenOne} /> */}
        <Tab.Screen name="ScreenThree1" component={ScreenThree} />
        <Tab.Screen name="ScreenFour1" component={ScreenFour} />
        <Tab.Screen name="ScreenTwo1" component={ScreenTwo} />
        <Tab.Screen name="Screen1" component={HomeScreen} />
      </Tab.Navigator>
  );
}

function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="SignUpForStark" component={SignUpForStark} options={{headerShown:false}} />
      <Stack.Screen name="DatePicker" component={DatePickerExample} options={{headerShown:false}} />
      <Stack.Screen name="Personal" component={PersonalInfo} options={{headerShown:false}} />
      <Stack.Screen name="TermsAndPrivacy" component={TermsAndPrivacy} options={{headerShown:false}} />
      <Stack.Screen name="FilterAlert" component={Filter} options={{headerShown:false}} />
       <Stack.Screen name="Alert" component={CustomAlert} options={{headerShown:false}} />
      <Stack.Screen name="screen1" component={Searchbar} options={{headerShown:false}} />
      <Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
        <Stack.Screen name="TabScreens" component={TabScreens}  />
        <Stack.Screen name="TabScreens2" component={TabScreens2}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function Routes() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
//         <Stack.Screen name="BillingDetails" component={BillingDetails} options={{headerShown:false}} />
//         <Stack.Screen name="screen3" component={Screen3} options={{headerShown:false}} />
//       <Stack.Screen name="CalenderModek" component={CalenderModek} options={{headerShown:false}} />
//       <Stack.Screen name="TableComp" component={TableComp} options={{headerShown:false}} />
//       <Stack.Screen name="Alert" component={CustomAlert} options={{headerShown:false}} />
//         <Stack.Screen name="screen1" component={Screen1} options={{headerShown:false}} />
//         <Stack.Screen name="Personal" component={PersonalInfo} options={{headerShown:false}} />
//         <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}} />
//         <Stack.Screen name="Accounts" component={Accounts} options={{headerShown:false}} />
//         <Stack.Screen name="AccountsCard" component={AccountsCard} options={{headerShown:false}} />
//         <Stack.Screen name="Calender" component={Calender} options={{headerShown:false}} />
//         <Stack.Screen name="CalenderComp" component={CalenderComp} options={{headerShown:false}} />
//         <Stack.Screen name="Header" component={Header} options={{headerShown:false}} />
//         <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
//         <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
//         <Stack.Screen name="SignUpForStark" component={SignUpForStark} options={{headerShown:false}} />
//         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
//         <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
//         <Stack.Screen name="DropDown" component={DropDownPickerComp} options={{headerShown:false}} />
//         <Stack.Screen name="BillingCartComponent" component={BillingCartComponent} options={{headerShown:false}} />
//         <Stack.Screen name="CartComp" component={CartComponent} options={{headerShown:false}} />
//         <Stack.Screen name="Design" component={DesignForStark} options={{headerShown:false}} />
//         <Stack.Screen name="Custom" component={CustomTextInput} options={{headerShown:false}} />
//         <Stack.Screen name="List Products" component={ListProducts}    options={{
//           headerRight: () => (
//           <CartIcon />
//           ),
//         }}/>
//         <Stack.Screen name="Add Address" component={AddressScreen} />
//         <Stack.Screen name="Cart" component={CartScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export const AppContainer = createAppContainer(Routes);

export default Routes ;