import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

//component
import SliderTitle from '../components/SliderTitle';
import BackButton from '../components/BackButton';

class ProfileSettingOriginal extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
                    <BackButton />
                    <SliderTitle title="Profile Setting" />
                </View>
                <View style={{flex:0, flexDirection: 'row', padding:20,}}>
                	<View style={{flexDirection: 'column', flex:1 }}>
                	<Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>Name</Text>
                	<TextInput style={{borderBottomWidth: 1, width: '100%' }} placeholder="Name" value="Raffi Ramdhani" />
                	</View>
                </View>
                <View style={{flex:1, flexDirection: 'row', padding:20,}}>
                	<View style={{flexDirection: 'column', flex:1 }}>
                	<Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>Username</Text>
                	<TextInput style={{borderBottomWidth: 1, width: '100%' }} placeholder="Username" value="Raffi Ramdhani" />
                	</View>
                </View>
                <View style={{flex:0, flexDirection: 'row',}}>
                <TouchableOpacity style={{backgroundColor: '#111', flex:1, flexDirection: 'row', padding: 20, margin:20, justifyContent: 'center', borderRadius: 30 }} onPress={() => this.props.navigation.goBack()}>
                	<Text style={{color: 'white', textTransform: 'uppercase'}}>Save Changes</Text>
                </TouchableOpacity>
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

const ProfileSetting = withNavigation(ProfileSettingOriginal)

export default ProfileSetting