import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,View
} from 'react-native';
import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; 
import Routes from './Src/Config/Routes';
import configureStore from './Src/Store/ConfigureStore';
import {Root} from 'native-base';
import SignUp from './Src/Screens/SignUp';
console.disableYellowBox = true;
import { MenuProvider } from 'react-native-popup-menu';


const store = configureStore();
function App() {
  return (
      <Root>
      <MenuProvider>  
      <Provider store={store}>
          <Routes />
      </Provider>
      </MenuProvider>
      </Root>
  );
}

export default App;
