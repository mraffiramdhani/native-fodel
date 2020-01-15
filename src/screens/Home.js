//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';

// Components
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import SliderTitle from '../components/SliderTitle';
import CardList from '../components/CardList';
import RestaurantList from '../components/RestaurantList';

// create a component
class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <SearchBar />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Category />
                    <SliderTitle title="Popular Menu" viewAll />
                    <CardList />
                    <SliderTitle title="Trending Restaurant" viewAll />
                    <RestaurantList />
                </ScrollView>
            </Container>
        );
    }
}

//make this component available to the app
export default Home;
