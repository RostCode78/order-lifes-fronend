// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*===============
=    SCREENS    =
===============*/

import LoginScreen from '../screens/LoginScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import SignupScreen from '../screens/SignupScreen';
import { BottomNavigator } from './BottomNavigator';

export type RootStackParamList = {
    Bienvenida: undefined;
    Login: undefined;
    Signup: undefined;
    Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Bienvenida"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Bienvenida"
                options={{
                    title:'Bienvenida',
                }}
                component={BienvenidaScreen}
            />
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
            <Stack.Screen
                name="Dashboard"
                options={{
                    title:'Dashboard',
                }}
                component={BottomNavigator}
            />
        </Stack.Navigator>
    );
};
