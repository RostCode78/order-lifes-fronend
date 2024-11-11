import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    Text, 
    Image, 
    Pressable,
} from 'react-native';
import { Buttons, colores } from './../../../themes/globalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { API_URL_DEV } from '@env';

interface Props {
    navigation: NavigationProp<any>;
}

const SignupScreen = ({ navigation }: Props ) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {

            if (password !== confirmPassword) {
                throw new Error('Las contraseñas no coinciden.');
            }

            // Send a POST request to the login endpoint with the user's email and password
            const res = await fetch(`${API_URL_DEV}auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password,
                }),
            });

            // If the response is not successful, throw an error
            if (!res.ok) {
                throw new Error('Error al registrar un nuevo usuario.');
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
            console.log('Error al registrar un nuevo usuario.', error);
        }
    };

    const GoToLogIn = () => {
        navigation.navigate('Login');
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
                <Image
                    source={require('./../../../../assets/background_login.png')}
                    style={{
                        width: 800, 
                        height: 800,
                        opacity: 0.1,
                    }}
                />
            </View>

            <View style={{
                height: '15%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Image
                source={require('./../../../../assets/logo_white.png')}
                style={{
                    width: 80, 
                    height: 80,
                }}
            />
            </View>

            <View style={{
                height: '85%',
                backgroundColor: colores.grey100,
                marginBottom: 0,
                borderTopLeftRadius: 100,
                paddingHorizontal: 48,
                paddingVertical: 36,
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
                    }}>Registro de usuario</Text>
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
                    >Nombre</Text>
                    <TextInput
                        placeholder="John Doe"
                        value={name}
                        onChangeText={setName}
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
                    >Correo</Text>
                    <TextInput
                        placeholder="example@gmail.com"
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
                    >Confirmar contraseña</Text>
                    <TextInput
                        placeholder="* * * * * * * * *"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
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
                    onPress={ handleSignIn }
                >
                    <Text
                        style={{
                            ...Buttons.buttonText,
                        }}
                        onPress={handleSignIn}
                    >Registrarme</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: '100%',
                        height: 'auto',
                        alignItems: 'center',
                        marginTop: 24,
                    }}
                    onPress={ GoToLogIn }
                >
                    <Text
                        style={{
                            color: colores.grey500,
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >¿Ya tienes una cuneta? Inicia sesión</Text>
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

export default SignupScreen;
