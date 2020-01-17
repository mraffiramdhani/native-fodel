//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { getRestaurants } from '../redux/actions/restaurant';

// create a component
class RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {
        await this.props.dispatch(getRestaurants())
        await this.setState({
            isLoading: false,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {!this.state.isLoading && this.props.restaurant.data.map((v, i) => {
                        var img = `asset:/icons/${v.icon}`
                        var styled = [styles.card]
                        if (i === 0) {
                            styled.push({ marginLeft: 20 })
                        }
                        if (i === this.props.restaurant.data.length - 1) {
                            styled.push({ merginRight: 20 })
                        }
                        return (
                            < View style={styled} key={i}>
                                <View style={styles.cardWrapper}>
                                    <Image style={{ width: 50, height: 50, borderRadius: 50, }} source={{ uri: img }} />
                                    <Text style={styles.title}>{v.name}</Text>
                                </View>
                            </View>
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
        alignItems: 'flex-start',
    },
    card: { backgroundColor: '#fff', width: 100, height: 120, borderRadius: 12, margin: 10, elevation: 5 },
    cardWrapper: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    title: { marginTop: 10, textAlign: 'center', fontFamily: 'Nunito-Regular' },
});

const mapStateToProps = state => {
    return {
        restaurant: state.restaurant
    }
}

//make this component available to the app
export default connect(mapStateToProps)(RestaurantList);
