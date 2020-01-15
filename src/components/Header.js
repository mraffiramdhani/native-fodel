//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header as Head } from 'native-base';

class Header extends Component {
    render() {
        return (
            <Head androidStatusBarColor="#222" style={styles.head}>
                <View style={styles.headWrapper}>
                    <View style={styles.nameWrapper}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.title}>Customer</Text>
                    </View>
                    <View style={styles.imageWrapper}>
                        <Image source={require('../assets/images/default.png')} style={styles.image} />
                    </View>
                </View>
            </Head>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    head: { height: 100, backgroundColor: '#fff', elevation: 0, },
    headWrapper: { flex: 1, flexDirection: 'row', padding: 20, },
    nameWrapper: { flex: 1, flexDirection: 'column' },
    name: { fontFamily: 'Nunito-Regular', fontSize: 30 },
    title: { fontFamily: 'Nunito-Regular', },
    imageWrapper: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' },
    image: { width: 40, height: 40 },
});

//make this component available to the app
export default Header;
