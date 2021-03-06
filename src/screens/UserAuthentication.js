//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

// create a component
class UserAuthenticationOriginal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/icons/favicon.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Fodel</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.illustWrapper}>
                        <Image source={require('../assets/images/illust_1.png')} style={styles.illust} />
                    </View>
                    <View style={styles.prologWrapper}>
                        <Text style={styles.title}>Welcome to Fodel!</Text>
                        <Text style={styles.subtitle}>Explore the enjoyment and easiness of ordering food online with Fodel.</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.epilogWrapper}>
                        <Text style={styles.subtitle}>With Signing In or Registering. Your are agreeing the Terms of Services and Privacy Policy.</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    headerWrapper: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    logo: {
        width: 30,
        height: 30
    },
    logoText: {
        marginLeft: 4,
        fontFamily: 'Nunito-Regular'
    },
    illustWrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    illust: {
        width: 300,
        height: 300
    },
    prologWrapper: {
        flex: 0,
        flexDirection: 'column'
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 30
    },
    subtitle: {
        fontFamily: 'Nunito-Regular',
        color: '#333'
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 5
    },
    buttonText: {
        fontFamily: 'Nunito-Regular',
        color: '#fff',
        textTransform: 'uppercase'
    },
    registerButton: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    epilogWrapper: {
        flex: 0,
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'flex-end'
    },
});

const UserAuthentication = withNavigation(UserAuthenticationOriginal)

//make this component available to the app
export default UserAuthentication;
