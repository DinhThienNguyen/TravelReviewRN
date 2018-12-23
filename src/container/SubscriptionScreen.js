/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ReviewCard from '../component/ReviewCard'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationActions, StackActions } from 'react-navigation';

const reviewList = [{ cardTitle: 'Huế, Vùng đất lịch sử', cardUsername: 'Hoàng Lộc', reviewThumbnail: '../resource/img/flower1.jpg', userAvatar: 'user1.jpg' }
];

export default class SubscriptionScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props)
    {
        super(props);
        this.goToRecommendationScreen = this.goToRecommendationScreen.bind(this);
        this.goToTourScreen = this.goToTourScreen.bind(this);
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

      goToTourScreen() {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'TourRecommendation' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

    render() {
        let list = reviewList.map((item, key) => {
            return (
                <View key={key}>
                    <ReviewCard
                        navigation={this.props.navigation} cardTitle={item.cardTitle} cardUsername={item.cardUsername} reviewThumbnail={item.reviewThumbnail} userAvatar={item.userAvatar}
                    ></ReviewCard>
                </View>
            );
        })
        return (
            <View style={styles.container}>
                <View style={{ flex: 18 }}>
                    <ScrollView>
                    <ReviewCard navigation={this.props.navigation} cardViews='573 lượt xem' cardTime='3 ngày trước' cardTitle='Vẻ đẹp vùng đất di sản Tràng An – Ninh Bình' cardUsername='Hoàng Lộc'></ReviewCard>
            <ReviewCard navigation={this.props.navigation} cardViews='761 lượt xem' cardTime='1 tuần trước' cardTitle='Huế, Vùng đất lịch sử' cardUsername='Hoàng Lộc'></ReviewCard>
            <ReviewCard navigation={this.props.navigation} cardViews='242 lượt xem' cardTime='1 tuần trước' cardTitle='Huế, Vùng đất lịch sử' cardUsername='Hoàng Lộc'></ReviewCard>

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
                        <TouchableOpacity>
                            <Icon name='md-today' size={30} color='#d40000'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationIcon}>
                        <TouchableOpacity onPress={this.goToTourScreen}>
                            <Icon name='md-paper-plane' size={30} color='#282828'></Icon>
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
