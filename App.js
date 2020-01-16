//import liraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from './src/redux/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ItemDetail from './src/screens/ItemDetail';

const { store, persistor } = storage();

const StackNav = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    },
  },
  ItemDetail: {
    screen: ItemDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
}, {
  initialRouteName: 'ItemDetail',
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
