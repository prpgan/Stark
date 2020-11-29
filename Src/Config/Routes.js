import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProducts from '../Screens/ListProducts';
import AddressScreen from '../Screens/AddressScreen';
import CartScreen from '../Screens/CartScreen';
import CartIcon from '../Screens/CartIcon';
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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