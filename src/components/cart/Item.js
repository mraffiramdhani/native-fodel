import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import formatRupiah from '../../helper/formatRupiah';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.quantity,
        }
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

    async handleEditCart(id) {
        this.props.openEditModal(id);
    }

    render() {
        const { id, image, item } = this.props
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
                    <Text style={styles.itemPrice}>{formatRupiah((item.price), 'Rp.')}</Text>
                    <Text style={{color: '#777'}}>X {this.state.quantity}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <Text>Total</Text>
                        <Text style={{fontSize: 18, color: 'green'}}>{formatRupiah((item.price * this.state.quantity), 'Rp.')}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.handleDeleteCart(id)}>
                            <Feather size={15} name="trash-2" size={25} style={{ color: 'red' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleEditCart(id)}>
                            <Feather size={15} name="edit" size={25} style={{ color: '#117C6F' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	itemWrapper: {
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
    color: '#777',
  },
});

export default Item;