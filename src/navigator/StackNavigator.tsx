// In App.js in a new project

import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*===============
=    SCREENS    =
===============*/

import LoginScreen from '../screens/LoginScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import SignupScreen from '../screens/SignupScreen';
import { BottomNavigator } from './BottomNavigator';
import { AuthContext } from '../context/Auth/AuthContext';

// export type RootStackParamList = {
//     Bienvenida: undefined;
//     Login: undefined;
//     Signup: undefined;
//     Dashboard: undefined;
// };

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    const { authState } = useContext(AuthContext);
    return (
        <Stack.Navigator
            initialRouteName={ authState.isLoggedIn ? 'Dashboard' : 'Bienvenida'}
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
