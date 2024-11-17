import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import SignupScreen from '../screens/signup/SignupScreen';
import { WelcomeScreen } from '../screens/welcome/WelcomeScreen';

export type RootStackParams = {
    Welcome: undefined;
    Login: undefined;
    Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Welcome"
                options={{
                    title:'Welcome',
                }}
                component={ WelcomeScreen }
            />
            <Stack.Screen
                name="Login"
                options={{
                    title:'Login',
                }}
                component={ LoginScreen }
            />
            <Stack.Screen
                name="Signup"
                options={{
                    title:'Signup',
                }}
                component={ SignupScreen }
            />
        </Stack.Navigator>
    );
};
