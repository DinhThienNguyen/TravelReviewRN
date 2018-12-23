/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import RecommendationScreen from './src/container/RecommendationScreen'
import SubscriptionScreen from './src/container/SubscriptionScreen'
import ReviewDetailScreen from './src/container/ReviewDetailScreen'
import ImageGalleryScreen from './src/container/ImageGalleryScreen'
import TourRecommendationScreen from './src/container/TourRecommendationScreen'

export default class App extends Component {
  render() {
    return (
      // <RecommendationScreen></RecommendationScreen>
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator({
  Recommendation: RecommendationScreen,
  Subscription: SubscriptionScreen,
  ReviewDetail: ReviewDetailScreen,
  ImageGallery: ImageGalleryScreen,
  TourRecommendation: TourRecommendationScreen
}, {
    initialRouteName: 'Recommendation',
  }
)

const AppContainer = createAppContainer(AppNavigator);
