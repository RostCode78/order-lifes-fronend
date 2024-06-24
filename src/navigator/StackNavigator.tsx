// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { BottomNavigator } from './BottomNavigator';

export type RootStackParamList = {
    Dashboard: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
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
                name="Dashboard"
                options={{
                    title:'Dashboard',
                }}
                component={BottomNavigator}
            />
        </Stack.Navigator>
    );
};
