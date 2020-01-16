//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getItem } from '../redux/actions/item';

// component
import ButtonBack from '../components/BackButton';

// create a component
class ItemDetail extends Component {
    componentDidMount() {
        this.props.dispatch(getItem())
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <ImageBackground source={{ uri: `asset:/images/${this.props.item.data.image}` }} style={styles.image} resizeMode="cover">
                        <View style={styles.headerWrapper}>
                            <ButtonBack />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.bodyWrapper}>
                    <View style={{ backgroundColor: 'blue', padding: 10 }}>
                        <Text style={styles.title}>{this.props.item.data.name}</Text>
                        <View style={{ height: '90%', backgroundColor: 'yellow' }}>
                            <ScrollView>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                                <Text style={styles.description}>{this.props.item.data.description}</Text>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerWrapper: {
        height: '50%',
        flexDirection: 'column',
        padding: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    bodyWrapper: {
        backgroundColor: 'white',
        marginTop: -50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: 30
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 30,
    },
    description: {
        width: '100%',
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        color: '#777',
    },
});

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

//make this component available to the app
export default connect(mapStateToProps)(ItemDetail);
