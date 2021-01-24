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
import CustomTextInput from '../Component/CustomTextInput';
import CustomAlert from '../Component/CustomAlert';
import Profile from '../Screens/Stark/Profile';
import DropDownPickerComp from '../Screens/Stark/DropDownPicker';
import CartComponent from '../Component/CartComponent';
import BillingCartComponent from '../Component/BillingCartComponent';
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BillingCartComponent" component={BillingCartComponent} options={{headerShown:false}} />
        <Stack.Screen name="CartComp" component={CartComponent} options={{headerShown:false}} />
        <Stack.Screen name="DropDown" component={DropDownPickerComp} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Design" component={DesignForStark} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Alert" component={CustomAlert} options={{headerShown:false}} />
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