import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TableComp" component={TableComp} options={{headerShown:false}} />
      <Stack.Screen name="CalenderModek" component={CalenderModek} options={{headerShown:false}} />
        <Stack.Screen name="screen3" component={Screen3} options={{headerShown:false}} />
      <Stack.Screen name="Alert" component={CustomAlert} options={{headerShown:false}} />
        <Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
        <Stack.Screen name="screen1" component={Screen1} options={{headerShown:false}} />
        <Stack.Screen name="Personal" component={PersonalInfo} options={{headerShown:false}} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}} />
        <Stack.Screen name="Accounts" component={Accounts} options={{headerShown:false}} />
        <Stack.Screen name="AccountsCard" component={AccountsCard} options={{headerShown:false}} />
        <Stack.Screen name="Calender" component={Calender} options={{headerShown:false}} />
        <Stack.Screen name="CalenderComp" component={CalenderComp} options={{headerShown:false}} />
        <Stack.Screen name="Header" component={Header} options={{headerShown:false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
        <Stack.Screen name="BillingDetails" component={BillingDetails} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="SignUpForStark" component={SignUpForStark} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="DropDown" component={DropDownPickerComp} options={{headerShown:false}} />
        <Stack.Screen name="BillingCartComponent" component={BillingCartComponent} options={{headerShown:false}} />
        <Stack.Screen name="CartComp" component={CartComponent} options={{headerShown:false}} />
        <Stack.Screen name="Design" component={DesignForStark} options={{headerShown:false}} />
        <Stack.Screen name="Custom" component={CustomTextInput} options={{headerShown:false}} />
        <Stack.Screen name="List Products" component={ListProducts}    options={{
          headerRight: () => (
          <CartIcon />
          ),
        }}/>
        <Stack.Screen name="Add Address" component={AddressScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export const AppContainer = createAppContainer(Routes);

export default Routes ;