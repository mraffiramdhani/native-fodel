//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Footer, FooterTab as FootTab, Button, Icon } from 'native-base';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
class FooterTab extends Component {
    render() {
        return (
            <Footer>
                <FootTab style={styles.footerTab}>
                    <Button vertical active>
                        <MCIcon name="hamburger" size={25} />
                        <Text>Menu</Text>
                    </Button>
                    <Button vertical>
                        <MCIcon name="apps-box" size={25} />
                        <Text>Category</Text>
                    </Button>
                    <Button vertical>
                        <MCIcon active name="cart" size={25} />
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
});

//make this component available to the app
export default FooterTab;
