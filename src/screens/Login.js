//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Input } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import AsyncStorage from '@react-native-community/async-storage';

// create a component
class LoginOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            isSuccess: false,
            message: '',
        }
    }

    async handleSubmit() {
        const { username, password } = this.state
        const data = {
            username,
            password
        }
        await this.props.dispatch(login(data))
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.auth.isLoading !== this.state.isLoading) {
            if (prevProps.auth.isLoading === true) {
                this.setState({
                    isLoading: true
                })
                console.log('masih loading')
            } else {
                console.log('sudah fulfill')
                if (this.props.auth.isSuccess) {
                    console.log('berhasil login')
                    await this.setState({
                        isLoading: false,
                        isSuccess: true,
                        message: "Login Success.",
                    })
                    await AsyncStorage.setItem('token', this.props.auth.data.token)
                    this.handleRedirect()
                } else {
                    console.log('gagal login')
                    await this.setState({
                        isLoading: false,
                        isSuccess: false,
                        message: "Login Failed. Try Again.",
                    })
                    this.handleRedirect()
                }
            }
        }
    }

    async handleRedirect() {
        if (this.state.isSuccess) {
            Alert.alert('Login Message', this.state.message, [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
            ])
        } else {
            Alert.alert('Login Message', this.state.message)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/icons/favicon.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Fodel</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.illustWrapper}>
                        <Image source={require('../assets/images/login.png')} style={styles.illust} />
                    </View>
                    <View style={styles.prologWrapper}>
                        <Text style={styles.title}>Login to Fodel!</Text>
                    </View>
                    <View style={styles.formWrapper}>
                        <View style={styles.input}>
                            <Input placeholder="Username" textContentType="username" value={this.state.username} onChange={(e) => this.setState({ username: e.nativeEvent.text })} />
                        </View>
                        <View style={styles.input}>
                            <Input placeholder="Password" secureTextEntry textContentType="password" value={this.state.password} onChange={(e) => this.setState({ password: e.nativeEvent.text })} />
                        </View>
                        <Text style={{ textAlign: 'right', margin: 5, color: '#0DAAFF' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.handleSubmit()}>
                            {this.props.auth.isLoading
                                ? <ActivityIndicator size="small" color="#fff" />
                                : <Text style={styles.buttonText}>Login</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={[styles.buttonText, { color: 'black' }]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 20,
    },
    headerWrapper: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    illust: {
        width: 150,
        height: 150
    },
    prologWrapper: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 30
    },
    formWrapper: {
        flex: 0,
        flexDirection: 'column',
        marginTop: 20
    },
    loginButton: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 0,
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
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 0,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    input: {
        flex: 0,
        flexDirection: 'row',
        margin: 5,
        borderBottomWidth: 2
    },
});

const Login = withNavigation(LoginOriginal)

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

//make this component available to the app
export default connect(mapStateToProps)(Login);
