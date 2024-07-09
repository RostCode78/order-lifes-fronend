import React from 'react';
import { View, Text } from 'react-native';
import { colores } from '../themes/globalTheme';

import WhiteLogo from './../../assets/icons/logo_white.svg';
import BackgroundStarfield from './../../assets/background_login.svg';

const SignupScreen = () => {
    return (
        <View style={{
            backgroundColor: colores.bgPrimary,
            position: 'relative',
        }}>
            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            }}>
                <BackgroundStarfield
                    width={ 800 }
                    height={ 800 }
                    opacity={ 0.15 }
                />
            </View>

            <View style={{
                height: '15%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <WhiteLogo width={80} height={80}/>
            </View>

            <View style={{
                height: '85%',
                backgroundColor: colores.grey100,
                marginBottom: 0,
                borderTopLeftRadius: 100,
                paddingHorizontal: 48,
                paddingVertical: 24,
            }}
            >
                <Text
                    style={{
                        color: colores.grey700,
                        fontSize: 36,
                        fontWeight: 'regular',
                        marginBottom: 20,
                    }}
                >Hola Amigo</Text>
            </View>
        </View>
    );
};

export default SignupScreen;
