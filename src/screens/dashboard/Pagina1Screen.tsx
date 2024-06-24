import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerScreenProps } from '@react-navigation/drawer';
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: Props ) => {

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text style={{ color:'#000' }}>Pagina 1</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};
