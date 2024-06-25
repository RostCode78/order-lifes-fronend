import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Pagina1Screen } from '../screens/dashboard/Pagina1Screen';
import { Pagina2Screen } from '../screens/dashboard/Pagina2Screen';
import { Pagina3Screen } from '../screens/dashboard/Pagina3Screen';
import { colores } from '../themes/globalTheme';
import { StyleSheet, Text, View } from 'react-native';

const Tareas = require('./../../assets/icons/tareas.svg').default;
const Premios = require('./../../assets/icons/premios.svg').default;
const Castigos = require('./../../assets/icons/castigos.svg').default;

const Tab = createBottomTabNavigator();

const TareasIcon = () => <Tareas width={25} height={25} />;
const PremiosIcon = () => <Premios width={25} height={25} />;
const CastigosIcon = () => <Castigos width={25} height={25} />;

const renderTabIcon = (IconComponent: any, label: any) => ({ focused, color }: any) => (
    <View
        style={{
            ...styles.iconContainer,
            ...(focused && styles.iconContainerFocused),
        }}
    >
        <IconComponent/>
        { focused &&
            <Text
                style={{
                    color: colores.grey800,
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 6,
                }}
            >{label}</Text>
        }
    </View>
);

export const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Tareas"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    marginHorizontal: 20,
                    elevation: 0,
                    backgroundColor: colores.white,
                    borderRadius: 10,
                    height: 60,
                    paddingHorizontal: 12,
                },
            }}
        >
            <Tab.Screen
                name="Tareas"
                options={{
                    tabBarIcon: renderTabIcon(TareasIcon, 'Tareas'),
                }}
                component={Pagina1Screen}
            />
            <Tab.Screen
                name="Premios"
                options={{
                    tabBarIcon: renderTabIcon(PremiosIcon, 'Premios'),
                }}
                component={Pagina2Screen}
            />
            <Tab.Screen
                name="Castigos"
                options={{
                    tabBarIcon: renderTabIcon(CastigosIcon, 'Castigos'),
                }}
                component={Pagina3Screen}
            />
            <Tab.Screen
                name="Gastos"
                options={{
                    tabBarIcon: renderTabIcon(CastigosIcon, 'Castigos'),
                }}
                component={Pagina3Screen}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainerFocused: {
        backgroundColor: '#a088f8',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 5,
    },
});
