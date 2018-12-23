import React, { Component } from 'react';
import { View } from 'react-native';
import Gallery from 'react-native-image-gallery';


export default class ImageGalleryScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            hue: [
                { source: require('../resource/img/hue.jpg'), dimensions: { width: '100%', height: '100%' } },
                { source: require('../resource/img/hue2.jpg'), dimensions: { width: '100%', height: '100%' } },
                { source: require('../resource/img/hue3.jpg'), dimensions: { width: '100%', height: '100%' } },
                { source: require('../resource/img/hue4.jpg'), dimensions: { width: '100%', height: '100%' } },
                { source: require('../resource/img/hue5.jpg'), dimensions: { width: '100%', height: '100%' } },
                { source: require('../resource/img/hue6.jpg'), dimensions: { width: '100%', height: '100%' } }
            ]
        }
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        return (
            <View style={{ flex: 1 }} >
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={item === 'hue' ? this.state.hue : this.state.danang}
                />
            </View>
        );
    }
}
