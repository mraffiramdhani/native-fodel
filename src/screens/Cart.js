//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { Button, Text } from 'native-base';
import Counter from 'react-native-counters';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { APP_URL } from '../config/config';
import { getCart, deleteCart } from '../redux/actions/cart';
import { withNavigation } from 'react-navigation';
import SliderTitle from '../components/SliderTitle';
import formatRupiah from '../helper/formatRupiah';

const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='minus' size={15} color={isMinusDisabled ? touchableDisabledColor : touchableColor} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='plus' size={15} color={isPlusDisabled ? touchableDisabledColor : touchableColor} />
};

// create component

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.quantity,
        }
    }

    onChange(number, type) {
        if (number === 0) {
            this.handleDeleteCart(this.props.id)
        }
        this.setState({ quantity: number })
    }

    async handleDeleteCart(id) {
        Alert.alert(
            'Cart Message',
            'Delete This Item ?',
            [
                { text: 'Cancel', onPress: () => this.setState({ quantity: 1 }) },
                { text: 'OK', onPress: () => this.props.onDelete(id) },
            ],
            { cancelable: true },
        )
    }

    render() {
        const { image, item } = this.props
        return (
            <View style={styles.itemWrapper}>
                <View>
                    {
                        image !== ''
                            ? <Image source={{ uri: image }} style={styles.image} resizeMethod="auto" resizeMode="cover" />
                            : <View style={[styles.image, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }]}><Text>No Image</Text></View>
                    }
                </View>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{formatRupiah((item.price * this.state.quantity), 'Rp.')}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.handleDeleteCart(this.props.id)}>
                            <Feather size={15} name="trash-2" size={25} style={{ color: 'red' }} />
                        </TouchableOpacity>
                        <Counter start={this.state.quantity} minusIcon={minusIcon} plusIcon={plusIcon} onChange={this.onChange.bind(this)} />
                    </View>
                </View>
            </View>
        )
    }
}

class CartOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            quantity: 0,
        }
    }
    async componentDidMount() {
        const jwt = await this.props.auth.data.token
        if (jwt !== null) {
            await this.props.dispatch(getCart(jwt))
            await this.setState({ isLoading: false })
        }
    }

    async handleConfirmDelete(id) {
        const jwt = await this.props.auth.data.token
        if (jwt !== null) {
            await this.props.dispatch(deleteCart(jwt, id))
            await this.setState({ isLoading: false })
        }
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
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        }
                        {!this.state.isLoading && this.props.cart.data.length !== 0 &&
                            this.props.cart.data.map((v, i) => {
                                if (v.images.length !== 0) {
                                    var image = APP_URL.concat(`/images/${v.image[0].filename}`)
                                }
                                return (
                                    <CartItem key={i} id={v.id} quantity={v.quantity} image={v.images.length !== 0 ? image : ''} item={v.detail[0]} onDelete={(e) => this.handleConfirmDelete(e)} />
                                )
                            })
                        }
                        {
                            !this.state.isLoading && this.props.cart.data.length === 0 &&
                            <View style={styles.itemWrapper, { justifyContent: 'center', alignItems: 'center' }}><Text>Cart is empty. Let's Go Food Hunting!</Text></View>
                        }
                    </ScrollView>
                </View>
                {!this.state.isLoading && this.props.cart.data.length !== 0 &&
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
    itemPrice: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: 'green',
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
