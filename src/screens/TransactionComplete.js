//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';
import ItemRating from '../components/ItemRating';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Cart' })],
});

// create a component
class TransactionCompleteOriginal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/icons/favicon.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Fodel</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.illustWrapper}>
                        <Image source={require('../assets/images/finish.png')} style={styles.illust} />
                    </View>
                    <View style={styles.prologWrapper}>
                        <Text style={styles.title}>Transaction Success</Text>
                        <Text style={styles.subtitle}>Give rating to item(s) you ordered.</Text>
                    </View>
                    <ItemRating image="drink.jpg" name="Kopi Teman Sejiwa" restaurant="Teman Sejiwa" rating={1} />
                    <ItemRating image="pizza.jpg" name="Cheese Bomb" restaurant="Pizza Hut" rating={1} />
                    <ItemRating image="salad.jpg" name="Salad Buah" restaurant="Salad Enak" rating={1} />
                </ScrollView>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#111', padding: 20, borderRadius: 30, margin: 10, alignItems: 'center' }} onPress={() => this.props.navigation.dispatch(resetAction)}>
                        <Text style={{ color: 'white', textTransform: 'uppercase' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
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
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    illust: {
        width: 250,
        height: 200
    },
    prologWrapper: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 30,
        color: 'green'
    },
    subtitle: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
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
});

const TransactionComplete = withNavigation(TransactionCompleteOriginal)

//make this component available to the app
export default TransactionComplete;
