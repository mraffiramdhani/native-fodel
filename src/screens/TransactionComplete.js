//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getLastOrdered, postReview } from '../redux/actions/item';
import { APP_IMAGE_URL } from '../config/config';
import ItemRating from '../components/ItemRating';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Cart' })],
});

// create a component
class TransactionCompleteOriginal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        reviews: [],
      }
    }

    async componentDidMount(){
        const jwt = this.props.auth.data.token;
        const ids = this.props.navigation.getParam('ids');
        await this.props.dispatch(getLastOrdered(jwt, ids));
    }

    async handleReview(order, data){
        let reviews = this.state.reviews;
        if (reviews.length === 0 && data !== null) {
            await this.setState(prevState => {
                return {
                    reviews: [...prevState.reviews, data],
                };
            });
        }
        else if (reviews.length !== 0) {
            const mapOfID = reviews.map(v => { return v.item_id });
            if (mapOfID.find(id => id === data.item_id)) {
                let arr = [...this.state.reviews];
                arr[order] = data;
                await this.setState({reviews: arr});
            }
            else {
                await this.setState(prevState => {
                    return {
                        reviews: [...prevState.reviews, data],
                    };
                });
            }
        }
    }

    async handleReviewSubmit(){
        if(this.state.reviews.length === 0 ){
            let arr = [];
            this.props.item.data.items.map((v) => {
                arr.push({
                    item_id: v.id,
                    rating: 1,
                    review: '',
                });
            });
            await this.setState({reviews: arr});
        }

        const data = {
            reviews: this.state.reviews,
        }
        const jwt = this.props.auth.data.token;
        if(jwt !== null){
            this.props.dispatch(postReview(jwt, data));
            this.props.navigation.dispatch(resetAction);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/icons/favicon.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Fodel</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.illustWrapper}>
                        <Image source={require('../assets/images/finish.png')} style={styles.illust} />
                    </View>
                    <View style={styles.prologWrapper}>
                        <Text style={styles.title}>Transaction Success</Text>
                        <Text style={styles.subtitle}>Give rating to item(s) you ordered.</Text>
                    </View>
                    {
                        this.props.item.data.items.map((v, i) => {
                            return (
                                <ItemRating 
                                    key={i}
                                    order={i}
                                    item={v}
                                    image={APP_IMAGE_URL.concat(v.images[0].filename)}
                                    name={v.name}
                                    rating={1}
                                    onReviewed={(order, data) => this.handleReview(order, data)}
                                />
                            )
                        })
                    }
                </ScrollView>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#111', padding: 20, borderRadius: 30, margin: 10, alignItems: 'center' }} onPress={() => this.handleReviewSubmit()}>
                        <Text style={{ color: 'white', textTransform: 'uppercase' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 20,
    },
    headerWrapper: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 30,
        height: 30
    },
    logoText: {
        marginLeft: 4,
        fontFamily: 'Nunito-Regular'
    },
    illustWrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    illust: {
        width: 250,
        height: 200
    },
    prologWrapper: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 30,
        color: 'green'
    },
    subtitle: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    loginButton: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 5
    },
    buttonText: {
        fontFamily: 'Nunito-Regular',
        color: '#fff',
        textTransform: 'uppercase'
    },
    registerButton: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
});

const TransactionComplete = withNavigation(TransactionCompleteOriginal)

const mapStateToProps = state => {
    return {
        item: state.item,
        auth: state.auth
    }
}

//make this component available to the app
export default connect(mapStateToProps)(TransactionComplete);
