//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Text } from 'native-base';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { checkout } from '../redux/actions/cart';

//component
import BackButton from '../components/BackButton';
import SliderTitle from '../components/SliderTitle';
import ItemAccordion from '../components/ItemAccordion';
import formatRupiah from '../helper/formatRupiah';

// create a component
class CheckoutOriginal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 0,
      }
      this.props.navigation.addListener('didFocus', () => this.onFocus(this.props.cart.data));
    }

    componentDidMount(){
        var total = 0;
        this.props.cart.data.map((v) => {
            total += (v.details.price * v.quantity);
        });
        this.setState({total});
    }

    onFocus(data){
        var total = 0;
        data.map((v) => {
            total += (v.details.price * v.quantity);
        });
        this.setState({total});
    }

    handleCheckout(){
        Alert.alert(
            'Order Message', 
            'Confirm Checkout ?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Confirm', onPress: () => this.checkout()}
            ]);
    }

    async checkout(){
        const jwt = this.props.auth.data.token;
        const ids_arr = [];
        await this.props.cart.data.map((v) => ids_arr.push(v.details.id));
        if (jwt !== null) {
            await this.props.dispatch(checkout(jwt));
            await this.props.navigation.navigate('TransactionComplete', {ids: ids_arr.join()});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <BackButton />
                    <SliderTitle title="Checkout" />
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column', elevation: 5, borderRadius: 50, padding: 30, }}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20, fontFamily: 'Nunito-Regular', marginBottom: 10}}>Order List :</Text>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    this.props.cart.data.map((v,i) => {
                                        return (
                                            <View style={{marginVertical: 5}} key={i}>
                                                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16}}>{v.details.name}</Text>
                                                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                                    <Text style={{fontSize: 14, fontFamily: 'Nunito-Regular', color: '#777'}}>X {v.quantity}</Text>
                                                    <Text style={{fontSize: 14, fontFamily: 'Nunito-Regular', color: '#777'}}>{formatRupiah((v.details.price * v.quantity), 'Rp.')}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        <View style={{flex: 0}}>
                            <View style={{marginVertical: 5, alignItems: 'center'}}>
                                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 25 }}>Total :</Text>
                                <Text style={{ color: 'green', fontFamily: 'Nunito-Regular', fontSize: 20 }}>{formatRupiah(this.state.total, 'Rp.')}</Text>
                            </View>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#222', padding: 20, width: '100%' }} onPress={() => this.handleCheckout()}>
                                <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Regular', textTransform: 'uppercase', color: 'white' }}>Confirm</Text>
                            </TouchableOpacity>
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

const Checkout = withNavigationFocus(CheckoutOriginal);

const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth
    }
};

//make this component available to the app
export default connect(mapStateToProps)(Checkout);
