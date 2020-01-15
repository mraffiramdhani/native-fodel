//import liraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from './src/redux/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';

import Home from './src/screens/Home';

const { store, persistor } = storage();

const StackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  initialRouteName: Home,
})

const AppContainer = createAppContainer(StackNav)

// create a component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.root}>
            <AppContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

//make this component available to the app
export default App;
