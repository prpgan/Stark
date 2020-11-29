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
console.disableYellowBox = true;


const store = configureStore();
function App() {
  return (
      <Root>
      <Provider store={store}>
          <Routes />
      </Provider>
      </Root>
  );
}

export default App;
