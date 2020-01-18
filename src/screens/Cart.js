//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Text } from 'native-base';
import Counter from 'react-native-counters';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { getCart } from '../redux/actions/cart';
import {withNavigation} from 'react-navigation';
import SliderTitle from '../components/SliderTitle';

const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='minus' size={15} color={isMinusDisabled ? touchableDisabledColor : touchableColor} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='plus' size={15} color={isPlusDisabled ? touchableDisabledColor : touchableColor} />
};

// create a component
class CartOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            quantity: 0,
        }
    }
    async componentDidMount() {
            await this.props.dispatch(getCart())
            await this.setState({ isLoading: false })        
    }
    onChange(number, type) {
        if (number === 0) {
            alert('Delete Item?')
        }
        this.setState({ quantity: number })
    }
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
                    <SliderTitle title="Cart" />
                </View>
                <View style={styles.contentWrapper}>
                    <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                        {this.state.isLoading && 
                            <View style={styles.itemWrapper}>
                                <View>
                                    
                                </View>
                            </View>
                        }
                        {!this.state.isLoading && this.props.cart.data.map((v, i) => {
                            var image = `asset:/images/${v.item.image}`
                            return (
                                <View style={styles.itemWrapper} key={i}>
                                    <View>
                                        <Image source={{ uri: image }} style={styles.image} resizeMethod="auto" resizeMode="cover" />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.itemName}>{v.item.name}</Text>
                                        <Text style={styles.itemRestaurant}>{v.item.restaurant}</Text>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                            <Feather size={15} name="trash-2" size={25} style={{ color: 'red' }} />
                                            <Counter start={v.quantity} minusIcon={minusIcon} plusIcon={plusIcon} onChange={this.onChange.bind(this)} />
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                {!this.state.isLoading && 
                <Button rounded dark block onPress={() => this.props.navigation.navigate('Checkout')}>
                    <Text>checkout</Text>
                </Button>
                }
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
        padding: 20,
    },
    headerWrapper: {
        flex: 0,
        flexDirection: 'row',
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
    },
    itemWrapper: {
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 12,
        margin: 10,
        flex: 1,
        flexDirection: 'row',
    },
    itemInfo: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
    },
    itemName: {
        fontFamily: 'Nunito-Regular',
        fontSize: 15
    },
    itemRestaurant: {
        fontFamily: 'Nunito-Regular',
        fontSize: 10,
        color: '#333',
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
});

const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth,
    }
}

const Cart = withNavigation(CartOriginal)

//make this component available to the app
export default connect(mapStateToProps)(Cart);
