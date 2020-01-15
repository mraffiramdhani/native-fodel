//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// create a component
class RestaurantList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <View style={styles.cardWrapper}>
                            <Image style={{ width: 50, height: 50, borderRadius: 50, }} source={require('../assets/icons/raid.jpg')} />
                            <Text style={styles.title}>Raid</Text>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    card: { backgroundColor: '#fff', width: 100, height: 120, borderRadius: 12, marginLeft: 20, elevation: 5 },
    cardWrapper: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    title: { marginTop: 10, textAlign: 'center', fontFamily: 'Nunito-Regular' },
});

//make this component available to the app
export default RestaurantList;
