//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

// create a component
class SplashOriginal extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Splash</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const Splash = withNavigation(SplashOriginal)

//make this component available to the app
export default Splash;
