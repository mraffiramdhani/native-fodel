'use strict';

import React, { Component } from 'react';
import Counter from 'react-native-counters';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  ActivityIndicator,
	TouchableOpacity,
	Text,
	TextInput,
} from 'react-native';
import { connect } from 'react-redux';

const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='minus' size={15} color={isMinusDisabled ? touchableDisabledColor : touchableColor} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
    return <Feather name='plus' size={15} color={isPlusDisabled ? touchableDisabledColor : touchableColor} />
};

class EditModal extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        isLoading: true,
        quantity: null,
        description: '',
      };
    }

    async componentDidUpdate(prevProps){
    	const { isLoading, cartDetail } = this.props.cart;
        if (isLoading !== this.state.isLoading) {
            if(isLoading){
                await this.setState({isLoading: true});
            }
            else {
                await this.setState({
                    isLoading: false,
                    quantity: cartDetail.quantity,
                    description: cartDetail.description,
                });
            }
        }
    }

    handleDeleteCart() {
    	const { id } = this.props.cart.cartDetail;
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

    handleSaveChanges(){
    	const { id } = this.props.cart.cartDetail;
      const data = {
        quantity: this.state.quantity,
        description: this.state.description,
      }
      this.props.onSave(id, data);
    }

    async onChange(number) {
        if (number === 0) {
            this.handleDeleteCart();
        }
        await this.setState({ quantity: number });
    }

    render(){
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
            >
                {
                    this.state.isLoading
                    ?   <View style={styles.loadingWrapper}>
                            <ActivityIndicator size="large" color="black" />
                        </View>
                    :   <View style={styles.contentWrapper}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => this.props.onClosePressed()}>
                                <Icon name="ios-close-circle" size={30} />
                            </TouchableOpacity>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>Edit Order</Text>
                            </View>
                            <View style={styles.subContentWrapper}>
                                <View style={styles.subContent}>
                                    <Text style={styles.qtyTitle}>Quantity :</Text>
                                </View>
                                <View style={styles.subContent}>
                                    <Counter start={this.state.quantity} minusIcon={minusIcon} plusIcon={plusIcon} onChange={e => this.onChange(e)} />
                                </View>
                            </View>
                            <View style={styles.descWrapper}>
                                <TextInput 
                               		multiline={true}
                               		style={{ justifyContent: 'flex-start' }}
                               		placeholder="Type a description for your order"
                               		value={this.state.description}
                               		onChange={(e) => this.setState({ description: e.nativeEvent.text })}
                               	/>
                            </View>
                            <View style={styles.saveWrapper}>
                                <TouchableOpacity style={{ backgroundColor: '#111', borderRadius: 30, flex: 1, margin: 20, padding: 10 }}
                                    onPress={() => {
                                        this.handleSaveChanges();
                                    }}>
                                    {
                                      this.state.isLoading
                                     	?	<ActivityIndicator size="large" color="#fff" />
                                      : <Text style={{ color: 'white', fontFamily: 'Nunito-Regular', fontSize: 20, textAlign: 'center', textTransform: 'uppercase' }}>save changes</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
	loadingWrapper: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentWrapper: {
		marginTop: 22,
		flex: 1,
		flexDirection: 'column'
	},
	closeButton: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		margin: 20 
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		fontFamily: 'Nunito-Regular'
	},
	subContentWrapper: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},
	subContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	qtyTitle: {
		fontFamily: 'Nunito-Regular',
		fontSize: 20
	},
	descWrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		margin: 20,
		padding: 20,
		elevation: 5,
		borderRadius: 30
	},
	saveWrapper: {
		flex: 0,
		flexDirection: 'row'
	},
});

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
};

export default connect(mapStateToProps)(EditModal);