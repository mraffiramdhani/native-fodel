//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';


// create a component
class CardList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.menuWrapper}>
                        <View>
                            <Image source={require('../assets/images/raid.jpg')} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.menuInfo}>
                            <Text style={styles.title}>Raid Shadow Legends</Text>
                            <Text style={styles.restaurant}>Restaurant Name</Text>
                            <View style={styles.info}>
                                <Text style={styles.startCount}><IonIcon name="ios-star" style={styles.star} size={15} /> 5</Text>
                                <Text style={styles.price}>Rp.5.000</Text>
                            </View>
                        </View>
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
        justifyContent: 'center',
    },
    menuWrapper: { flex: 1, flexDirection: 'column', marginLeft: 20, },
    image: { width: 200, height: 120, borderRadius: 15 },
    menuInfo: { flex: 1, flexDirection: 'column', margin: 10, },
    restaurant: { fontFamily: 'Nunito-Regular', color: '#444', fontSize: 12 },
    title: { fontFamily: 'Nunito-Regular', fontSize: 16 },
    info: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    star: { color: '#e3bd00' },
    starCount: { fontFamily: 'Nunito-Regular' },
    price: { fontFamily: 'Nunito-Regular', color: 'green' }
});

//make this component available to the app
export default CardList;
