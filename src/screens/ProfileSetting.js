import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { patchUser } from '../redux/actions/auth';

//component
import SliderTitle from '../components/SliderTitle';
import BackButton from '../components/BackButton';

class ProfileSettingOriginal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			username: '',
			isLoading: false,
		}
	}

	async componentDidMount() {
		await this.setState({
			name: this.props.auth.data.name,
			username: this.props.auth.data.username,
		})
	}

	async handleSubmit() {
		await this.setState({ isLoading: true })
		const jwt = await this.props.auth.data.token
		const { name, username } = this.state
		const data = {
			name, username
		}
		if (jwt !== null) {
			await this.props.dispatch(patchUser(jwt, data))
			await this.setState({ isLoading: false })
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<BackButton />
					<SliderTitle title="Profile Setting" />
				</View>
				<View style={{ flex: 0, flexDirection: 'row', padding: 20, }}>
					<View style={{ flexDirection: 'column', flex: 1 }}>
						<Text style={{ fontFamily: 'Nunito-Regular', fontSize: 20 }}>Name</Text>
						<TextInput style={{ borderBottomWidth: 1, width: '100%' }} placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.nativeEvent.text })} />
					</View>
				</View>
				<View style={{ flex: 0, flexDirection: 'row', padding: 20, }}>
					<View style={{ flexDirection: 'column', flex: 1 }}>
						<Text style={{ fontFamily: 'Nunito-Regular', fontSize: 20 }}>Username</Text>
						<TextInput style={{ borderBottomWidth: 1, width: '100%' }} placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.nativeEvent.text })} />
					</View>
				</View>
				<View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
					<TouchableOpacity style={{ backgroundColor: '#111', flex: 1, flexDirection: 'row', padding: 20, margin: 20, justifyContent: 'center', borderRadius: 30 }} onPress={() => this.handleSubmit()}>
						{
							this.state.isLoading
								? <ActivityIndicator size="small" color="#fff" />
								: <Text style={{ color: 'white', textTransform: 'uppercase' }}>Save Changes</Text>
						}
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

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
})

const ProfileSetting = withNavigation(ProfileSettingOriginal)

const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps)(ProfileSetting)