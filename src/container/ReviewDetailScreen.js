import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import CommentCard from '../component/CommentCard'



export default class ReviewDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: '',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerRight: (
                <TouchableOpacity onPress={() => {

                }}
                    style={{
                        backgroundColor: '#d40000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        // backgroundColor: 'black',
                        borderRadius: 100,
                        marginRight: 10
                    }}
                >
                    <Icon name="md-paper-plane" size={30} color='white' />
                </TouchableOpacity >
            ),
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../resource/img/hue.jpg')} style={{ height: 250 }}>

                        <LinearGradient style={{ flex: 1, justifyContent: 'flex-end', padding: 10 }} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,.4)', 'rgba(0,0,0,.8)']}>
                            <Text numberOfLines={5} style={{ color: 'white', fontFamily: 'georgia', fontStyle: 'italic', fontWeight: 'bold', fontSize: 22 }}>
                                Vẻ đẹp vùng đất di sản Tràng An – Ninh Bình
                            </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                <TouchableOpacity style={styles.tag}>
                                    <Text style={{ color: 'white', fontFamily: 'roboto', fontSize: 18, padding: 5 }}>Khám phá</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tag}>
                                    <Text style={{ color: 'white', fontFamily: 'roboto', fontSize: 18, padding: 5 }}>Kinh nghiệm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tag}>
                                    <Text style={{ color: 'white', fontFamily: 'roboto', fontSize: 18, padding: 5 }}>Di sản</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>

                    </ImageBackground>
                    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity >
                                <Icon name='md-star-outline' size={40} color='#282828'></Icon>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15 }}>4.1/5.0</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity >
                                <Icon name='md-share-alt' size={40} color='#282828'></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity >
                                <Icon name='md-bookmark' size={40} color='#282828'></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, flexDirection: 'row', padding: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 6, alignItems: 'center' }}>
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
                                <View style={{}}>
                                    <Text style={{ paddingLeft: 10, color: 'black', fontFamily: 'georgia', fontWeight: 'bold', fontSize: 20 }}>Hoàng Lộc</Text>
                                    <Text style={{ paddingLeft: 10, color: 'black', fontFamily: 'tahoma', fontSize: 18 }}>87k người theo dõi</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableOpacity style={{ borderColor: 'white', backgroundColor: '#b70000', borderWidth: 1, borderRadius: 10 }}>
                                    <Text
                                        numberOfLines={2}
                                        style={{ padding: 5, color: 'white', fontFamily: 'georgia', fontWeight: 'bold', fontSize: 18 }}>
                                        Theo dõi
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', color: 'black' }}>
                            Đến với Tràng An điều thú vị nhất là được hòa mình vào thiên nhiên, với không khí trong lành, không gian yên tĩnh. Có lẽ, nơi đây vẫn ẩn chứa những trầm mặc, huyền bí mà không phải chỉ ngày một ngày hai là có thể khám phá được hết mà cần thời gian bóc dỡ từng lớp vỏ mới cảm nhận được trọn vẹn tinh túy bên trong Tràng An.
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 20, fontFamily: 'georgia', fontWeight: 'bold', color: 'black' }}>
                            Vị trí
                        </Text>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', color: 'black' }}>
                            Nằm cách Hà Nội khoảng 94km, các bạn sẽ chỉ mất khoảng 2 giờ đồng hồ để đến Ninh Bình nếu đi bằng xe khách hoặc chỉ mất 90 phút nếu đi bằng phương tiện cá nhân.
                        </Text>
                        <View style={{ alignItems: 'center', width: '100%', padding: 10 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageGallery', {
                                item: 'hue',
                            })}>
                                <Image source={require('../resource/img/hue.jpg')} style={{ width: 300, height: 75 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 20, fontFamily: 'georgia', fontWeight: 'bold', color: 'black' }}>
                            Địa điểm tham quan
                        </Text>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', fontWeight: 'bold', color: 'black' }}>
                            Chùa Bái Đính - thiêng liêng và huyền bí
                        </Text>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', color: 'black' }}>
                            Chùa Bái Đính là một quần thể chùa lớn được biết đến với nhiều kỷ lục châu Á và Việt Nam được xác lập. Đây không chỉ là ngôi chùa lớn nhất Việt Nam mà còn được xem là ngôi chùa lớn nhất Đông Nam Á.
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', padding: 10 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageGallery', {
                                item: 'hue',
                            })}>
                                <Image source={require('../resource/img/hue3.jpg')} style={{ width: 100, height: 75 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageGallery', {
                                item: 'hue',
                            })}>
                                <Image source={require('../resource/img/hue2.jpg')} style={{ width: 100, height: 75 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageGallery', {
                                item: 'hue',
                            })}>
                                <Image source={require('../resource/img/hue4.jpg')} style={{ width: 100, height: 75 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', color: 'black' }}>
                            Chùa Bái Đính sở hữu nhiều kỷ lục như tượng Phật bằng đồng dát vàng lớn nhất Đông Nam Á; Chuông đồng to nhất Việt Nam; Hành lang có nhiều tượng Phật nhất; Nhiều cây bồ đề nhất Việt Nam; Giếng ngọc lớn nhất Việt Nam...
                        </Text>
                        <Text style={{ marginTop: 5, fontSize: 20, fontFamily: 'georgia', fontWeight: 'bold', color: 'black' }}>
                            Đánh giá
                        </Text>
                        <Text style={{ fontSize: 20, fontFamily: 'roboto', color: 'black' }}>
                            Một ngày du lịch Tràng An để lại cho chúng tôi rất nhiều kỉ niệm đẹp. Đặc biệt những ấn tượng về con người, thiên nhiên...
                        </Text>

                        <View style={{ borderTopWidth: 0.5, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, fontFamily: 'roboto', color: 'black' }}>
                                    Bình luận
                                </Text>
                                <Text style={{ paddingLeft: 10, fontSize: 20, fontFamily: 'roboto' }}>
                                    2
                                </Text>
                            </View>
                            <TextInput multiline={true} style={{ borderWidth: 0.7, fontSize: 20 }} placeholder='Nhập bình luận của bạn'></TextInput>
                            <View style={{ alignItems: 'flex-end', paddingBottom: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: '#ea0000' }}>
                                    <Text style={{ padding: 10, fontSize: 20, color: 'white' }}>Đăng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <CommentCard userName='Tấn Tài' commentTime='2 ngày trước' comment='Bài viết hay. Mình đã có đi tới đây, đọc qua bài viết thì như kỷ niệm ùa về!'></CommentCard>
                        <CommentCard userName='Phúc Linh' commentTime='1 ngày trước' comment='Tác giả viết có tâm quá! Mình đã theo dõi!'></CommentCard>
                    </View>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navigationIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    tag: {
        borderColor: 'white',
        borderWidth: 0.9,
        borderRadius: 10,
        marginRight: 5
    }
});
