//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getPopularItems } from '../redux/actions/item';
import {APP_URL} from '../config/config';
import formatRupiah from '../helper/formatRupiah';


// create a component
class CardListOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        await this.props.dispatch(getPopularItems())
        await this.setState({ isLoading: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {!this.state.isLoading && this.props.item.data.items.map((v, i) => {
                        var img = <View style={[styles.image,{backgroundColor: '#bbb'}]}><Text>No Image</Text></View>
                        if(v.images.length !== 0){
                            if(v.images[0].filename.substr(0, 4) === 'http'){
                                img = <Image source={{ uri: v.images.filename }} style={styles.image} resizeMode="cover" />
                            }else{
                                img = <Image source={{ uri: APP_URL.concat('/images/' + v.images[0].filename) }} style={styles.image} resizeMode="cover" />
                            }
                        }
                        var styler = [styles.menuWrapper]
                        if (i === 0) {
                            styler.push({ marginLeft: 20 })
                        }
                        if (i === this.props.item.data.length - 1) {
                            styler.push({ marginRight: 20 })
                        }
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDetail', {itemId: v.id})} key={i}>
                                <View style={styler}>
                                    <View>
                                        {img}
                                    </View>
                                    <View style={styles.menuInfo}>
                                        <Text style={styles.title}>{v.name}</Text>
                                        <Text style={styles.restaurant}>{v.restaurant}</Text>
                                        <View style={styles.info}>
                                            <Text style={styles.startCount}><IonIcon name="ios-star" style={styles.star} size={15} /> {v.rating}</Text>
                                            <Text style={styles.price}>{formatRupiah(v.price, 'Rp.')}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    menuWrapper: { flex: 1, flexDirection: 'column', margin: 10 },
    image: { width: 200, height: 120, borderRadius: 15, justifyContent: 'center', alignItems: 'center'  },
    menuInfo: { flex: 1, flexDirection: 'column', margin: 10, },
    restaurant: { fontFamily: 'Nunito-Regular', color: '#444', fontSize: 12 },
    title: { fontFamily: 'Nunito-Regular', fontSize: 16 },
    info: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    star: { color: '#e3bd00' },
    starCount: { fontFamily: 'Nunito-Regular' },
    price: { fontFamily: 'Nunito-Regular', color: 'green' }
});

const CardList = withNavigation(CardListOriginal)

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

//make this component available to the app
export default connect(mapStateToProps)(CardList);
