//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Input, Container } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/item';
import IonIcon from 'react-native-vector-icons/Ionicons';

//Component
import BackButton from '../components/BackButton';

// create a component
class SearchOriginal extends Component {
    componentDidMount() {
        this.props.dispatch(getItems())
    }

    rupiah(angka) {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.headerWrapper}>
                    <BackButton />
                    <View style={styles.searchWrapper}>
                        <IonIcon name="ios-search" style={styles.searchIcon} />
                        <Input style={styles.searchInput} placeholder="Feelin' hungry today?" />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {this.props.item.data && this.props.item.data.map((v, i) => {
                        var img = `asset:/images/${v.image}`
                        return (
                            <View style={styles.itemWrapper} key={i}>
                                <View>
                                    <Image source={{ uri: img }} style={styles.image} resizeMode="cover" />
                                </View>
                                <View style={styles.itemInfo}>
                                    <Text style={styles.itemName}>{v.name}</Text>
                                    <Text style={styles.itemRestaurant}>{v.restaurant}</Text>
                                    <View style={styles.info}>
                                        <Text style={styles.startCount}><IonIcon name="ios-star" style={styles.star} size={18} /> {v.rating}</Text>
                                        <Text style={styles.price}>{this.rupiah(v.price)}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        flex: 1,
        flexDirection: 'column',
    },
    headerWrapper: {
        flexDirection: 'row',
        margin: 10,
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
    itemWrapper: {
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 12,
        margin: 10,
        flex: 1,
        flexDirection: 'row',
    },
    itemInfo: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
    itemName: {
        fontFamily: 'Nunito-Regular',
        fontSize: 15
    },
    itemRestaurant: {
        fontFamily: 'Nunito-Regular',
        fontSize: 10,
        color: '#333'
    },
    image: {
        width: 100,
        height: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    searchIcon: {
        fontSize: 25,
        color: '#444',
        marginRight: 10,
    },
    searchInput: {
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
        color: '#333'
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    star: { color: '#e3bd00' },
    starCount: { fontFamily: 'Nunito-Regular', },
    price: { fontFamily: 'Nunito-Regular', color: 'green' },
});

const Search = withNavigation(SearchOriginal)

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

//make this component available to the app
export default connect(mapStateToProps)(Search);
