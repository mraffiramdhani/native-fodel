//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from './src/redux/store';

const { store, persistor } = storage();

// create a component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View>
            <Text>App</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

//make this component available to the app
export default App;
