//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
import { Header as Head } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class HeaderOriginal extends Component {
    render() {
        return (
            <Head androidStatusBarColor="#222" style={styles.head}>
                {this.props.auth.data.token &&
                    <View style={styles.headWrapper}>
                        <View style={styles.nameWrapper}>
                            <Text style={styles.name}>John Doe</Text>
                            <Text style={styles.title}>Customer</Text>
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image source={require('../assets/images/default.png')} style={styles.image} />
                        </View>
                    </View>
                }
                {this.props.auth.data.length === 0 &&
                    <View style={styles.headWrapper}>
                        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 16 }}>Sign In to start ordering</Text>
                        <Button info bordered rounded onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#0DAAFF', fontFamily: 'Nunito-Regular', fontSize: 16 }}>Sign In</Text>
                        </Button>
                    </View>
                }
            </Head>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    head: { height: 100, backgroundColor: '#fff', elevation: 0, },
    headWrapper: { flex: 1, flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between' },
    nameWrapper: { flex: 1, flexDirection: 'column' },
    name: { fontFamily: 'Nunito-Regular', fontSize: 30 },
    title: { fontFamily: 'Nunito-Regular', },
    imageWrapper: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' },
    image: { width: 40, height: 40 },
});

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const Header = withNavigation(HeaderOriginal)

//make this component available to the app
export default connect(mapStateToProps)(Header);
