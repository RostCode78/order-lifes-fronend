import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { colores } from '../themes/globalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL_DEV } from '@env';

import { DrawerScreenProps } from '@react-navigation/drawer';
interface Props extends DrawerScreenProps<any, any>{}

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

    return (
        <View style={{
            backgroundColor: colores.grey800,
            width: '100%',
            height: '100%',
            padding: 24,
        }}>
            <TextInput
                placeholder="Correo"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={colores.grey500}
                style={{ color: colores.grey100 }}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={colores.grey500}
                style={{ color: colores.grey100 }}
                secureTextEntry
            />
            <Button
                title="Iniciar sesión"
                onPress={handleLogin}
            />
            { error && <View style={{ marginTop: 20 }}><Text>{error}</Text></View> }
        </View>
    );
};

export default LoginScreen;
