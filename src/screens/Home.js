//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/category';
import { getPopularItems } from '../redux/actions/item';
import { getRestaurants } from '../redux/actions/restaurant';

// Components
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import SliderTitle from '../components/SliderTitle';
import CardList from '../components/CardList';
import RestaurantList from '../components/RestaurantList';

// create a component
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch(getCategories())
        this.props.dispatch(getPopularItems())
        this.props.dispatch(getRestaurants())
    }

    render() {
        return (
            <Container>
                <Header />
                <SearchBar />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.content}>
                        <Category data={this.props.category.data} />
                        <SliderTitle title="Popular Menu" viewAll />
                        <CardList data={this.props.item.data} />
                        <SliderTitle title="Trending Restaurant" viewAll />
                        <RestaurantList data={this.props.restaurant.data} />
                    </View>
                </ScrollView>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: { paddingBottom: 20 },
})

const mapStateToProps = state => {
    return {
        category: state.category,
        item: state.item,
        restaurant: state.restaurant,
    }
}

//make this component available to the app
export default connect(mapStateToProps)(Home);
