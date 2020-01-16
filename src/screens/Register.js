//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';

// create a component
class RegisterOriginal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={{ uri: 'asset:/icons/favicon.png' }}
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.formItem}>
                    <TextInput style={styles.input} placeholder="Fullname" />
                </View>
                <View style={styles.formItem}>
                    <TextInput style={styles.input} placeholder="Username" />
                </View>
                <View style={styles.formItem}>
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
                <View style={styles.formItem}>
                    <TextInput style={styles.input} placeholder="Re-Type Password" />
                </View>
                <View style={styles.formItem}>
                    <Button style={{ justifyContent: 'center' }} rounded dark>
                        <Text style={styles.loginText}>register</Text>
                    </Button>
                </View>
                <View style={styles.formItem}>
                    <Button style={{ justifyContent: 'center' }} rounded light onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.registerText}>i have an account</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoImage: {
        width: 80,
        height: 80,
    },
    formItem: {
        marginTop: 5,
        marginBottom: 5,
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#2c7c96',
        paddingLeft: 20,
        fontSize: 22,
        textAlign: 'center',
    },
    loginText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
    },
    registerText: {
        textTransform: 'uppercase',
        color: '#111',
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
    },
});

const Register = withNavigation(RegisterOriginal)

//make this component available to the app
export default Register;
