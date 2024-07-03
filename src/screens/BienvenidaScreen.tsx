import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colores } from '../themes/globalTheme';
import PrimaryButton from '../components/PrimaryButton';

import { DrawerScreenProps } from '@react-navigation/drawer';
interface Props extends DrawerScreenProps<any, any>{}

const BienvenidaScreen = ( { navigation }: Props ) => {

    const GoToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ ...styles.linearGradient }}>
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require('./../../assets/image1.png')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 10,
                            transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: '-15deg' }],
                        }}
                    />
                    <Image
                        source={require('./../../assets/image2.png')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: -30,
                            left: 100,
                            transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '-5deg' }],
                        }}
                    />
                    <Image
                        source={require('./../../assets/image3.png')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 130,
                            left: -50,
                            transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '15deg' }],
                        }}
                    />
                    <Image
                        source={require('./../../assets/image4.png')}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 110,
                            left: 100,
                            transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '-15deg' }],
                        }}
                    />

                    {/* Content */}

                    <View
                        style={{
                            paddingHorizontal: 22,
                            position: 'absolute',
                            top: 400,
                            width: '100%',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 50,
                                fontWeight: 800,
                                color: colores.white,
                            }}
                        >
                            Let's Get
                        </Text>
                        <Text
                            style={{
                                fontSize: 46,
                                fontWeight: 800,
                                color: colores.white,
                            }}
                        >
                            Started
                        </Text>
                        <View style={{ marginVertical: 22 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colores.white,
                                    marginVertical: 4,
                                }}
                            >Connect with each other with chatting</Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colores.white,
                                }}
                            >Calling, Enjoy Safe and private texting</Text>
                        </View>

                        <PrimaryButton
                            title="Join Now"
                            style={{
                                marginTop: 22,
                                with: '100%',
                            }}
                        />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 12,
                        }}>
                            <Text style={{ fontSize: 16, color: colores.white }}>Already have an account?</Text>
                            <Pressable
                                onPress={ GoToLogin }
                            >
                                <Text style={{ fontSize: 16, color: colores.white, fontWeight: 'bold', marginLeft: 4 }}> Login </Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default BienvenidaScreen;
