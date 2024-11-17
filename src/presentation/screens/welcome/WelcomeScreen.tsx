import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CtaButton } from '../../components/Buttons/CtaButton';
import { NavigationProp } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    navigation: NavigationProp<any>;
}

export const WelcomeScreen = ({ navigation }: Props ) => {

    const [ textCount, setTextCount ] = useState('');

    const Texts = [
        'life.',
        'tasks.',
        'time.',
        'money.',
    ];

    useEffect(() => {
        let index = 0;
        setTextCount(Texts[index]);

        const intervalId = setInterval(() => {
            index = (index + 1) % Texts.length;
            setTextCount(Texts[index]);
        }, 2000);

        return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View
            style={styles.container}
        >

            <View style={ styles.contentWelcome }>

                <Image
                    source={require('../../../../assets/lyferLogo.png')}
                    style={{
                        width: '80%',
                        maxHeight: 250,
                        objectFit: 'contain',
                        alignSelf: 'center',
                        position: 'absolute',
                        top: 60,
                    }}
                />

                <Text style={{
                    ...styles.textWelcome,
                    fontSize: RFValue(50),
                }}>
                    Join Lyfer, and organize your { textCount }
                </Text>

                <CtaButton
                    title="Become"
                    onPress={ handleGoToLogin }
                    urlImage={require('./../../../../assets/chevron-double-right.png')}
                />

            </View>

            <LinearGradient
                colors={['rgba(22, 22, 22, 0.85)', '#111111']}
                style={styles.bgDegrade}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <View style={ styles.bgImage }>
                <Image
                    source={require('../../../../assets/background_login.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#161616',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    bgDegrade: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    // Content Welcome
    contentWelcome: {
        width: '100%',
        height: '100%',
        paddingVertical: 36,
        paddingHorizontal: 24,
        gap: 48,
        zIndex: 2,
        justifyContent: 'flex-end',
    },
    // Text
    textWelcome: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
