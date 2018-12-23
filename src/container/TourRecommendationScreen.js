/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TourCard from '../component/TourCard'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationActions, StackActions } from 'react-navigation';

const reviewList = [{ cardTitle: 'Huế, Vùng đất lịch sử', cardUsername: 'Hoàng Lộc', reviewThumbnail: '../resource/img/flower1.jpg', userAvatar: 'user1.jpg' }
];

export default class RecommendationScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.goToSubscriptionScreen = this.goToSubscriptionScreen.bind(this);
        this.goToRecommendationScreen = this.goToRecommendationScreen.bind(this);
    }

    goToSubscriptionScreen() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Subscription' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    goToRecommendationScreen() {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Recommendation' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 18 }}>
                    <ScrollView>
                        <TourCard navigation={this.props.navigation} cardTourTime='3 ngày 2 đêm' cardTitle='Khám phá Huế mộng mơ' cardTourName='VietTravel'></TourCard>
                        <TourCard navigation={this.props.navigation} cardTourTime='3 ngày 2 đêm' cardTitle='Khám phá Huế mộng mơ' cardTourName='VietTravel'></TourCard>
                        <TourCard navigation={this.props.navigation} cardTourTime='3 ngày 2 đêm' cardTitle='Khám phá Huế mộng mơ' cardTourName='VietTravel'></TourCard>
                    </ScrollView>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 0.5 }}>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity onPress={this.goToRecommendationScreen}>
                            <Icon name='md-home' size={30} color='#282828'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity>
                            <Icon name='md-flame' size={30} color='#282828'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity onPress={this.goToSubscriptionScreen}>
                            <Icon name='md-today' size={30} color='#282828'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity>
                            <Icon name='md-paper-plane' size={30} color='#d40000'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity>
                            <Icon name='md-contact' size={30} color='#282828'></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee',
    },
    navigationIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
