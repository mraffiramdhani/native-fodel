//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// create a component
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {this.props.data && this.props.data.map((v, i) => {
                        var img = `asset:/icons/${v.icon}`;
                        var styler = [styles.card]
                        if (i === 0) {
                            styler.push({ marginLeft: 20 })
                        }
                        if (i === this.props.data.length - 1) {
                            styler.push({ marginRight: 20 })
                        }
                        return (
                            <View style={styler} key={i}>
                                <View style={styles.cardWrapper}>
                                    <Image style={{ width: 50, height: 50 }} source={{ uri: img }} />
                                    <Text style={styles.title}>{v.name}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
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

//make this component available to the app
export default Category;
