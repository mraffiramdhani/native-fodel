//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SliderTitle from '../components/SliderTitle';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/category';
import { withNavigation } from 'react-navigation';
import { APP_ICON_URL } from '../config/config';

// create a component
class CategoryOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    async componentDidMount() {
        await this.props.dispatch(getCategories())
        await this.setState({ isLoading: false })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <SliderTitle title="Categories" />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.contentWrapper}>
                        {!this.state.isLoading && this.props.category.data.categories.map((v, i) => {
                            var image = APP_ICON_URL.concat(v.icon)
                            return (
                                <TouchableOpacity style={styles.categoryCard} key={i} onPress={() => this.props.navigation.navigate('Search', { search: [{ name: "category", value: v.id }] })}>
                                    <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
                                    <Text style={{ marginTop: 5, fontFamily: 'Nunito-Regular', fontSize: 14, textAlign: 'center' }}>{v.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: 'white',
    },
    headerWrapper: {
        flex: 0,
        flexDirection: 'row',
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    categoryCard: {
        backgroundColor: 'white',
        margin: 5,
        elevation: 5,
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '30%',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
    },
});

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

const Category = withNavigation(CategoryOriginal)

//make this component available to the app
export default connect(mapStateToProps)(Category);
