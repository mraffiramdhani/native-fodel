//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//Component
import BackButton from '../components/BackButton';
import SearchBar from '../components/SearchBar';

// create a component
class SearchOriginal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackButton />
                    </TouchableOpacity>
                    <View style={styles.searchWrapper}>
                        <Icon name="ios-search" style={styles.searchIcon} />
                        <Input style={styles.searchInput} placeholder="Feelin' hungry today?" autoFocus />
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eee',
        height: 50,
        borderRadius: 10,
        padding: 20,
        marginLeft: 20,
    },
    searchIcon: { fontSize: 25, color: '#444', marginRight: 10, },
    searchInput: { fontFamily: 'Nunito-Regular', fontSize: 18, color: '#333' }
});

const Search = withNavigation(SearchOriginal)

//make this component available to the app
export default Search;
