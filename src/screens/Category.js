//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SliderTitle from '../components/SliderTitle';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/category';
import { withNavigation } from 'react-navigation';

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
                <View style={styles.contentWrapper}>
                    {!this.state.isLoading && this.props.category.data.map((v, i) => {
                        var image = `asset:/icons/${v.icon}`
                        return (
                            <View key={i} style={styles.categoryCard} onStartShouldSetResponder={() => this.props.navigation.navigate('Search')}>
                                {/* <View style={{ flex: 1, flexDirection: 'column' }}> */}
                                <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
                                <Text style={{ marginTop: 5, fontFamily: 'Nunito-Regular', fontSize: 14 }}>{v.name}</Text>
                                {/* </View> */}
                            </View>
                        )
                    })}
                </View>
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
