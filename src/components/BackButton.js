//import liraries
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={styles.container}>
                    <Icon name="ios-arrow-back" style={styles.icon} />
                </View>
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

//make this component available to the app
export default BackButton;
