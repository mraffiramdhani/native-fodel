//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, Badge } from 'native-base';
import { connect } from 'react-redux';
import {APP_URL} from '../config/config';
import { getItem } from '../redux/actions/item';
import {withNavigation} from 'react-navigation';
import formatRupiah from '../helper/formatRupiah';

// component
import ButtonBack from '../components/BackButton';

// create a component
class ItemDetailOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    async componentDidMount() {
        await this.props.dispatch(getItem(this.props.navigation.getParam('itemId')))
        await this.setState({ isLoading: false })
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.isLoading &&
                    <>
                        {this.props.item.itemDetail.images ?
                            <ImageBackground source={{ uri: `asset:/images/${this.props.item.itemDetail.image}` }} style={styles.imageBackground} resizeMethod="auto" resizeMode="cover">
                                <ButtonBack />
                            </ImageBackground>
                            :
                            <View style={styles.imageBackground}>
                                <ButtonBack />
                            </View>
                        }
                        <View style={styles.infoCard}>
                            <Text style={styles.name}>{this.props.item.itemDetail.name}</Text>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.infoWrapper}>
                                    <View style={styles.ratingWrapper}>
                                        <Icon name="ios-star" size={30} style={styles.star} />
                                        <Text style={styles.starCount}>{this.props.item.itemDetail.rating}</Text>
                                    </View>
                                    <Text style={styles.price}>{formatRupiah(this.props.item.itemDetail.price, 'Rp.')}</Text>
                                </View>
                                <Text style={styles.description}>{this.props.item.itemDetail.description}</Text>
                                <View style={styles.categoryWrapper}>
                                    {this.props.item.itemDetail.categories.map((v, i) => (
                                        <TouchableOpacity style={styles.categories} key={i} onPress={() => this.props.navigation.navigate('Search', {search: [{name:"category", value: v.id}]})}>
                                            <Text style={styles.categoryText}>{v.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <Text style={{marginTop: 10}}>Suggested Menu</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {this.props.item.itemDetail.suggest.map((v,i) => {
                                    return(
                                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 100, height: 120, borderRadius: 12, margin: 10, elevation: 5, marginLeft: 20 }} key={i} onPress={() => this.props.navigation.push('ItemDetail', {itemId: v.id})}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                {
                                                    v.images.length !==0
                                                    ? <Image source={{uri: APP_URL.concat(`/images/${v.images[0].filename}`)}} style={{ backgroundColor: '#eee', width: 50, height: 50 }} resizeMode="cover"/>
                                                    : <Image source={{uri: `asset:/icons/favicon.png`}} style={{ backgroundColor: '#eee', width: 50, height: 50 }} resizeMode="cover"/>
                                                }
                                                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 12, textAlign: 'center' }}>{v.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                                </ScrollView>
                            </ScrollView>
                            <Button rounded dark style={styles.button}>
                                <Text style={styles.buttonText}>Add to cart</Text>
                            </Button>
                        </View>
                    </>
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imageBackground: {
        flex: 1,
        padding: 20,
    },
    infoCard: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        marginTop: -120,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: 30
    },
    infoWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ratingWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        color: '#e3bd00',
    },
    starCount: {
        fontFamily: 'Nunito-Regular',
        fontSize: 25,
    },
    price: {
        fontFamily: 'Nunito-Regular',
        fontSize: 25,
        color: 'green',
    },
    name: {
        fontFamily: 'Nunito-Regular',
        fontSize: 25,
        marginBottom: 5,
    },
    description: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    button: { justifyContent: 'center', marginTop: 10 },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
    },
    categoryWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        flexWrap: 'wrap',
    },
    categories: {
        backgroundColor: '#ddd',
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 10,
        padding:5,
    },
    categoryText: {
        color: '#111',
        fontFamily: 'Nunito-Regular',
    },
});

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

const ItemDetail = withNavigation(ItemDetailOriginal)

//make this component available to the app
export default connect(mapStateToProps)(ItemDetail);
