//import liraries
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Root } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from '../screens/Splash';
import UserAuthentication from '../screens/UserAuthentication';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import ItemDetail from '../screens/ItemDetail';
import Category from '../screens/Category';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Profile from '../screens/Profile';

const SplashNav = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Splash',
})

const AuthNav = createStackNavigator({
    UserAuthentication: {
        screen: UserAuthentication,
        navigationOptions: {
            headerShown: false,
        },
    },
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
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'UserAuthentication',
})

const HomeNav = createStackNavigator({
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
    initialRouteName: 'Home',
})

HomeNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const CategoryNav = createStackNavigator({
    Category: {
        screen: Category,
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
    initialRouteName: 'Category',
})

CategoryNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const CartNav = createStackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: {
            headerShown: false,
        },
    },
    Checkout: {
        screen: Checkout,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Cart',
})

CartNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const ProfileNav = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Profile',
})

const BottomNav = createBottomTabNavigator({
    Menu: {
        screen: HomeNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="hamburger" size={25} color={tintColor} />;
            },
        },
    },
    Category: {
        screen: CategoryNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="apps-box" size={25} color={tintColor} />;
            },
        },
    },
    Cart: {
        screen: CartNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="cart" size={25} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: ProfileNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="face-profile" size={25} color={tintColor} />;
            },
        },
    },
}, {
    initialRouteName: 'Menu',
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'black',
        inactiveTintColor: 'black',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
        }
    }
})

const SwitchNav = createSwitchNavigator({
    SplashNav,
    AuthNav,
    BottomNav,
}, {
    initialRouteName: 'SplashNav',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <Root>
                <AppContainer />
            </Root>
        );
    }
}

//make this component available to the app
export default Router;
