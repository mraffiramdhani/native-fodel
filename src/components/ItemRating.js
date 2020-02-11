//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

// create a component
class ItemRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starCount: this.props.rating,
        }
    }
    handleStarCountChange(starCount) {
        this.setState({
            starCount
        })
    }
    render() {
        return (
            <View style={styles.menuWrapper}>
                <View>
                    <Image source={{ uri: this.props.image }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={styles.menuInfo}>
                    <Text style={styles.menuTitle}>{this.props.name}</Text>
                    <Text style={styles.restaurant}>{this.props.restaurant}</Text>
                </View>
                <View>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        emptyStarColor={'#e3bd00'}
                        fullStarColor={'#e3bd00'}
                        selectedStar={(rating) => this.handleStarCountChange(rating)}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    menuWrapper: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 30
    },
    menuInfo: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    menuTitle: {
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
    },
    restaurant: {
        fontFamily: 'Nunito-Regular',
        color: '#444',
        fontSize: 12
    },
});

//make this component available to the app
export default ItemRating;
