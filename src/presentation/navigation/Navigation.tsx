import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import SignupScreen from '../screens/signup/SignupScreen';

export type RootStackParams = {
    Login: undefined;
    Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                options={{
                    title:'Login',
                }}
                component={LoginScreen}
            />
            <Stack.Screen
                name="Signup"
                options={{
                    title:'Signup',
                }}
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
};
