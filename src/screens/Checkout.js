//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Text} from 'native-base';
import {StackActions, NavigationActions,withNavigation} from 'react-navigation';

//component
import BackButton from '../components/BackButton';
import SliderTitle from '../components/SliderTitle';
import ItemAccordion from '../components/ItemAccordion';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Cart' })],
});

// create a component
class CheckoutOriginal extends Component {
    rupiah(angka) {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <BackButton />
                    <SliderTitle title="Checkout" />
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{backgroundColor: 'white', flex:1, flexDirection: 'column' , elevation: 5, borderRadius: 50, padding: 30, }}>
                        <View>
                        <ItemAccordion data={[{title: "Item(s) List", content: "asdasd"}]} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', margin: 20, alignItems: 'center' }}>
                            <Text style={{fontFamily: 'Nunito-Regular', fontSize: 30}}>Your Total</Text>
                            <Text style={{color: 'green', fontFamily: 'Nunito-Regular', fontSize: 40}}>{this.rupiah(12000)}</Text>
                        </View>
                        <View>
                            <Button rounded dark style={{justifyContent: 'center' }} onPress={() => this.props.navigation.dispatch(resetAction)}>
                                <Text>Confirm</Text>
                            </Button>
                        </View>
                    </View>
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
        flex: 0, 
        flexDirection: 'row',
        margin: 20,
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
});

const Checkout = withNavigation(CheckoutOriginal)

//make this component available to the app
export default Checkout;
