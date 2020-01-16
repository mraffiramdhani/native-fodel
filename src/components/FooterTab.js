//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Footer, FooterTab as FootTab, Button, Icon, Badge, Text as NativeText } from 'native-base';
import { withNavigation } from 'react-navigation'

const menuList = [
    { icon: 'hamburger', text: 'Menu' },
    { icon: 'apps-box', text: 'Category' },
    { icon: 'cart', text: 'Cart' },
    { icon: 'face-profile', text: 'Profile' },
]

// create a component
class FooterTabOriginal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Footer>
                <FootTab style={styles.footerTab}>
                    {menuList && menuList.map((v, i) => {
                        return (
                            <Button key={i} vertical style={this.props.active === v.text ? styles.active : {}}>
                                <Icon name={v.icon} type="MaterialCommunityIcons" style={this.props.active === v.text ? styles.textActive : styles.text} />
                                <Text style={this.props.active === v.text ? styles.textActive : styles.text}>{v.text}</Text>
                            </Button>
                        )
                    })}
                </FootTab>
            </Footer>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    footerTab: { backgroundColor: '#fff' },
    active: { backgroundColor: '#111' },
    text: { color: 'black' },
    textActive: { color: '#fff' }
});

const FooterTab = withNavigation(FooterTabOriginal)

//make this component available to the app
export default FooterTab;
