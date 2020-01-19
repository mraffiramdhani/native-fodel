//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Input, Container } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/item';
import {APP_URL} from '../config/config';
import IonIcon from 'react-native-vector-icons/Ionicons';
import formatRupiah from '../helper/formatRupiah';

//Component
import BackButton from '../components/BackButton';

// create a component
class SearchOriginal extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchDidMount: '',
            searchValue: '',
            isLoading: true,
            isSuccess: false,
        }
    }

    async componentDidMount() {
        const searchParam = this.props.navigation.getParam('search')
        if(searchParam){
            var search = []
            var params = ""
            searchParam.map((v,i) => {
                search.push(`search[${v.name}]=${v.value}`)
            })
            params = search.join('&')
            await this.setState({searchDidMount: params})
            await this.props.dispatch(getItems(params))
        }else{
            await this.props.dispatch(getItems())
        }
        await this.setState({isLoading: false})
    }

    async componentDidUpdate(prevProps, prevState){
        if(prevState.searchValue !== this.state.searchValue){
            if(this.state.searchValue.length >= 3){
                await this.setState({isLoading: true})
                await this.props.dispatch(getItems(this.state.searchDidMount + `&search[name]=${this.state.searchValue}`))
                await this.setState({isLoading: false})
            }else if(this.state.searchValue.length === 0){
                await this.setState({isLoading: true})
                await this.props.dispatch(getItems(this.state.searchDidMount))
                await this.setState({isLoading: false})
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.headerWrapper}>
                    <BackButton />
                    <View style={styles.searchWrapper}>
                        <IonIcon name="ios-search" style={styles.searchIcon} />
                        <Input style={styles.searchInput} placeholder="Feelin' hungry today?" value={this.state.searchValue} onChange={(e) => this.setState({searchValue: e.nativeEvent.text})} />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {!this.state.isLoading && this.props.item.data.items.map((v, i) => {
                        var img = <View style={[styles.image,{backgroundColor: '#bbb'}]}><Text>No Image</Text></View>
                        if(v.images.length !== 0){
                            if(v.images[0].filename.substr(0, 4) === 'http'){
                                img = <Image source={{ uri: v.images.filename }} style={styles.image} resizeMode="cover" />
                            }else{
                                img = <Image source={{ uri: APP_URL.concat('/images/' + v.images[0].filename) }} style={styles.image} resizeMode="cover" />
                            }
                        }
                        return (
                            <TouchableOpacity style={styles.itemWrapper} key={i} onPress={() => this.props.navigation.navigate('ItemDetail',{itemId: v.id})}>
                                <View>
                                    {img}
                                </View>
                                <View style={styles.itemInfo}>
                                    <Text style={styles.itemName}>{v.name}</Text>
                                    <Text style={styles.itemRestaurant}>{v.restaurant}</Text>
                                    <View style={styles.info}>
                                        <Text style={styles.startCount}><IonIcon name="ios-star" style={styles.star} size={18} /> {v.rating}</Text>
                                        <Text style={styles.price}>{formatRupiah(v.price, 'Rp.')}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
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
