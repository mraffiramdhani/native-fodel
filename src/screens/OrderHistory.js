import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SliderTitle from '../components/SliderTitle';
import BackButton from '../components/BackButton';

class OrderHistory extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<BackButton />
					<SliderTitle title="Order History" />
				</View>
				<View style={{flex:0, flexDirection: 'row', padding:20,}}>
                	<View style={{flexDirection: 'column', flex:1,}}>
                		<Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>Order #1</Text>
                		<Text>Date: 18-01-2020</Text>
                	</View>
                	<Text>Rp.12.000</Text>
                </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
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
})

export default OrderHistory