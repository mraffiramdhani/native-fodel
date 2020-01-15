//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Input, Item } from 'native-base';

// create a component
class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchbarWrapper}>
                    <Item style={styles.searchbar}>
                        <Icon name="ios-search" style={styles.searchIcon} />
                        <Input style={styles.searchInput} placeholder="Telusuri Aplikasi & Game"></Input>
                    </Item>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingBottom: 10,
    },
    searchbarWrapper: { paddingLeft: 20, paddingRight: 20, },
    searchbar: { backgroundColor: '#eee', borderRadius: 12, paddingLeft: 15, borderBottomColor: 'transparent' },
    searchIcon: { fontSize: 20, color: '#444' },
    searchInput: { fontFamily: 'Nunito-Regular' }
});

//make this component available to the app
export default SearchBar;
