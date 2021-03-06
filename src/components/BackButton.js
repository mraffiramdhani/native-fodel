//import liraries
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

// create a component
class BackButtonOriginal extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.goBack()}>
                <Icon name="ios-arrow-back" style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    icon: {
        fontSize: 30,
    },
});

const BackButton = withNavigation(BackButtonOriginal)

//make this component available to the app
export default BackButton;
