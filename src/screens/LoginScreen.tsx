import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Pressable } from 'react-native';
import { colores, style, Buttons } from '../themes/globalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { API_URL_DEV } from '@env';

import WhiteLogo from './../../assets/icons/logo_white.svg';
import BackgroundStarfield from './../../assets/background_login.svg';

interface Props {
    navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: Props ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle the login process
    const handleLogin = async () => {
        try {
            // Send a POST request to the login endpoint with the user's email and password
            const res = await fetch(`${API_URL_DEV}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                }),
            });

            // If the response is not successful, throw an error
            if (!res.ok) {
                throw new Error('Error al iniciar Sesión');
            }

            // Parse the response data
            const data = await res.json();

            // Clear the error state
            setError('');

            // Store the user token in AsyncStorage
            await AsyncStorage.setItem('userToken', data.token);

            // Navigate to the Dashboard screen
            navigation.navigate('Dashboard');

        } catch (error:any) {
            // If an error occurs, set the error state and log the error
            setError(error.message);
            console.log('Error al iniciar Sesión', error);
        }
    };

    const GoToSignup = () => {
        navigation.navigate('Signup');
    };

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
                height: '30%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <WhiteLogo width={120} height={120}/>
            </View>

            <View style={{
                height: '70%',
                backgroundColor: colores.grey100,
                marginBottom: 0,
                borderTopLeftRadius: 100,
                paddingHorizontal: 48,
                paddingVertical: 24,
            }}
            >
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        paddingVertical: 24,
                    }}
                >
                    <Text style={{
                        color: colores.grey700,
                        fontSize: 36,
                        fontWeight: 'regular',
                        marginBottom: 20,
                    }}>Inicio Sesión</Text>
                </View>

                <View
                    style={{
                        backgroundColor: colores.white,
                        padding: 12,
                        borderRadius: 10,
                        marginBottom: 24,
                    }}
                >
                    <Text
                        style={{
                            color: colores.grey700,
                            fontWeight: 500,
                            fontSize: 16,
                            marginBottom: 6,
                        }}
                    >Correo</Text>
                    <TextInput
                        placeholder="example@email.com"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={colores.grey500}
                        style={{ 
                            color: colores.grey800,
                            height: 40,
                            padding: 0,
                            fontSize: 16,
                        }}
                    />
                </View>

                <View
                    style={{
                        backgroundColor: colores.white,
                        padding: 12,
                        borderRadius: 10,
                        marginBottom: 24,
                    }}
                >
                    <Text
                        style={{
                            color: colores.grey700,
                            fontWeight: 500,
                            fontSize: 16,
                            marginBottom: 6,
                        }}
                    >Contraseña</Text>
                    <TextInput
                        placeholder="* * * * * * * * *"
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor={colores.grey500}
                        style={{ 
                            color: colores.grey800,
                            height: 40,
                            padding: 0,
                            fontSize: 16,
                        }}
                        secureTextEntry
                    />
                </View>

                <Pressable
                    style={{
                        ...Buttons.buttonPrimary,
                        width: '100%',
                    }}
                    onPress={ handleLogin }
                >
                    <Text
                        style={{
                            ...Buttons.buttonText,
                        }}
                        onPress={handleLogin}
                    >Iniciar sesión</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: '100%',
                        height: 'auto',
                        alignItems: 'center',
                        marginTop: 24,
                    }}
                    onPress={ GoToSignup }
                >
                    <Text
                        style={{
                            color: colores.grey500,
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >¿No tienes una cuenta? Regístrate</Text>
                </Pressable>

                { error &&
                    <View
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 16,
                                marginTop: 12,
                            }}
                        >{error}</Text>
                    </View>
                }
            </View>
        </View>
    );
};

export default LoginScreen;
