import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { style } from '../themes/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL_DEV } from '@env';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const insets = useSafeAreaInsets();

    const handleLogin = async () => {
        try {

            const res = await fetch(`${API_URL_DEV}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                }),
            });

            if (!res.ok) {
                throw new Error('Error al iniciar Sesión');
            }

            const data = await res.json();
            setError('');
            await AsyncStorage.setItem('userToken', data.token);

        } catch (error:any) {
            setError(error.message);
            console.log('Error al iniciar Sesión', error);
        }
    };

    return (
        <View style={{
            ...style.globalMargin,
            marginTop: insets.top + 20,
        }}>
            <TextInput
                placeholder="Correo"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
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
