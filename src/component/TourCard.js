import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class TourCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 4 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ReviewDetail")}>
            <Image source={require('../resource/img/hue.jpg')} style={{ height: 210 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', flex: 2 }}>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                // backgroundColor: 'black',
                borderRadius: 100,
              }}>
              <Image source={require('../resource/img/vtv-logo.png')} style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'black',
                borderRadius: 100,
              }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 8, justifyContent: 'center', paddingRight: 5 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: '#000000' }} numberOfLines={2}>{this.props.cardTitle} </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, color: '#282828' }} numberOfLines={1}>{this.props.cardTourName}</Text>
              </View>
              <Text style={{ fontSize: 16, color: '#282828' }} numberOfLines={1}>{this.props.cardTourTime}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
    borderBottomWidth: 0.3,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
