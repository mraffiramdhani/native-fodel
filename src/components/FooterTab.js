//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Footer, FooterTab as FootTab, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
class FooterTabOriginal extends Component {
    render() {
        return (
            <Footer>
                <FootTab style={styles.footerTab}>
                    <Button vertical style={styles.active}>
                        <MCIcon name="hamburger" size={25} style={styles.textActive} />
                        <Text style={styles.textActive}>Menu</Text>
                    </Button>
                    <Button vertical>
                        <MCIcon name="apps-box" size={25} />
                        <Text>Category</Text>
                    </Button>
                    <Button vertical rounded style={{ backgroundColor: '#111' }} onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon name="ios-search" style={{ color: '#fff' }} size={55} />
                    </Button>
                    <Button vertical>
                        <MCIcon name="cart" size={25} />
                        <Text>Cart</Text>
                    </Button>
                    <Button vertical>
                        <MCIcon name="face-profile" size={25} />
                        <Text>Profile</Text>
                    </Button>
                </FootTab>
            </Footer>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    footerTab: { backgroundColor: '#fff' },
    active: { backgroundColor: '#111' },
    textActive: { color: '#fff' }
});

const FooterTab = withNavigation(FooterTabOriginal)

//make this component available to the app
export default FooterTab;
