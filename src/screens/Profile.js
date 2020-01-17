//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SliderTitle from '../components/SliderTitle';
import Feather from 'react-native-vector-icons/Feather';

// create a component
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <View style={{ flexDirection: 'row' }}>
                        <SliderTitle title="Profile" />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/images/default.png')} style={{ width: 100, height: 100, borderRadius: 15, borderColor: 'white', borderWidth: 3 }} />
                        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 30, color: '#111' }}>John Doe</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                    <ScrollView style={{ width: '100%', height: '100%', }} showsVerticalScrollIndicator={false}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', elevation: 1, marginTop: 20, padding: 20 }}>
                            <View>
                                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 25 }}>John Doe</Text>
                                <Text style={{ fontFamily: 'Nunito-Regular', color: '#333', fontSize: 15 }}>john.doe</Text>
                                <Text style={{ fontFamily: 'Nunito-Regular', color: '#333' }}>+627876543267</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'Nunito-Regular', color: 'green', fontSize: 15 }}>Change</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', elevation: 1, marginTop: 20, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="help-circle" size={25} />
                            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10 }}>Help</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', elevation: 1, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="log-out" size={25} color="red" />
                            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10, color: 'red' }}>Log Out</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
    headerWrapper: {
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 20
    },
});

//make this component available to the app
export default Profile;
