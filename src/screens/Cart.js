//import liraries
import React, { Component } from 'react';
import SliderTitle from '../components/SliderTitle';
import Item from '../components/cart/Item';
import EditModal from '../components/cart/EditModal';
import { connect } from 'react-redux';
import { APP_IMAGE_URL } from '../config/config';
import { getCart, deleteCart, getCartById, patchCart } from '../redux/actions/cart';
import { withNavigationFocus } from 'react-navigation';
import { View, StyleSheet, ScrollView, Image, ActivityIndicator, Modal, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Button, Text } from 'native-base';

class CartOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            modalVisible: false,
        }
    }

    async componentDidMount() {
        const jwt = await this.props.auth.data.token;
        if (jwt !== null) {
            await this.props.dispatch(getCart(jwt));
        }
        this.props.navigation.addListener('didFocus', () => this.onFocus(jwt));
    }

    async onFocus(jwt){
        await this.props.dispatch(getCart(jwt));
    }

    async handleConfirmDelete(id) {
        const jwt = this.props.auth.data.token;
        if (jwt !== null) {
            await this.props.dispatch(deleteCart(jwt, id));
            await this.setState({ modalVisible: false });
        }
    }

    async handleSaveChanges(id, data){
        const jwt = this.props.auth.data.token;
        if (jwt !== null){
            await this.props.dispatch(patchCart(jwt, id, data));
            await this.setState({ modalVisible: false });
        }
    }

    async onEditPressed(e){
        const jwt = this.props.auth.data.token;
        this.setState({modalVisible: true});
        await this.props.dispatch(getCartById(jwt, e));
    }

    render() {
        return (
            <View style={styles.container}>
                <EditModal
                    visible={this.state.modalVisible}
                    onDelete={e => this.handleConfirmDelete(e)} 
                    onSave={(id, data) => this.handleSaveChanges(id, data)}
                    onClosePressed={() => this.setState({modalVisible: !this.state.modalVisible})}
                />
                <View style={styles.headerWrapper}>
                    <SliderTitle title="Cart" />
                </View>
                <View style={styles.contentWrapper}>
                    <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                        {this.props.cart.isLoading &&
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        }
                        {!this.props.cart.isLoading && this.props.cart.data.length !== 0 &&
                            this.props.cart.data.map((v, i) => {
                                if (v.images.length !== 0) {
                                    var image = APP_IMAGE_URL.concat(v.images[0].filename)
                                }
                                return (
                                    <Item
                                        key={i}
                                        id={v.id}
                                        quantity={v.quantity}
                                        image={v.images.length !== 0 ? image : ''}
                                        item={v.details}
                                        onDelete={(e) => this.handleConfirmDelete(e)}
                                        openEditModal={e => this.onEditPressed(e)}
                                    />
                                )
                            })
                        }
                        {
                            !this.props.cart.isLoading && this.props.cart.data.length === 0 &&
                            <View style={styles.itemWrapper, { justifyContent: 'center', alignItems: 'center' }}><Text>Cart is empty. Let's Go Food Hunting!</Text></View>
                        }
                    </ScrollView>
                </View>
                {!this.props.cart.isLoading && this.props.cart.data.length !== 0 &&
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
});

const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth,
    }
}

const Cart = withNavigationFocus(CartOriginal)

//make this component available to the app
export default connect(mapStateToProps)(Cart);
