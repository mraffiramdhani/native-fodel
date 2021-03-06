//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'
import { Icon, Item } from 'native-base';

// create a component
class SearchBarOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchbarWrapper}>
                    <Item style={styles.searchbar} onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon name="ios-search" style={styles.searchIcon} />
                        <Text style={styles.searchInput}>Feelin' hungry today?</Text>
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
    searchbar: { backgroundColor: '#eee', borderRadius: 12, paddingLeft: 15, borderBottomColor: 'transparent', height: 50 },
    searchIcon: { fontSize: 25, color: '#444' },
    searchInput: { fontFamily: 'Nunito-Regular', fontSize: 18, color: '#333' }
});

const SearchBar = withNavigation(SearchBarOriginal);

//make this component available to the app
export default SearchBar;
