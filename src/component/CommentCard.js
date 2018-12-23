import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class CommentCard extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', borderTopWidth: 0.5, borderBottomWidth: 0.5, paddingTop: 10, paddingBottom: 10 }}>
                <View style={{ flex: 2 , alignItems:'center'}}>
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
                        <Image source={require('../resource/img/flower1.jpg')} style={{
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
                <View style={{ flex: 8 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{this.props.userName} - </Text>
                        <Text style={{ fontSize: 18 }}>{this.props.commentTime}</Text>
                    </View>
                    <Text style={{ fontSize: 20, color: 'black' }}>{this.props.comment}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 330,
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
