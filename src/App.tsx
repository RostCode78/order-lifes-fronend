import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigation/Navigation';

export default function App() {
    return (
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    );
}
