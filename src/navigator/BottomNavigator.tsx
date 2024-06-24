import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Pagina1Screen } from '../screens/dashboard/Pagina1Screen';
import { Pagina2Screen } from '../screens/dashboard/Pagina2Screen';
import { Pagina3Screen } from '../screens/dashboard/Pagina3Screen';

const Tareas = require('./../../assets/icons/tareas.svg').default;
const Premios = require('./../../assets/icons/premios.svg').default;
const Castigos = require('./../../assets/icons/castigos.svg').default;

const Tab = createMaterialBottomTabNavigator();

const TareasIcon = () => <Tareas width={25} height={25} />;
const PremiosIcon = () => <Premios width={25} height={25} />;
const CastigosIcon = () => <Castigos width={25} height={25} />;

export const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Tareas"
            activeColor="#f9f5f4"
            barStyle={{
                backgroundColor: '#303030',
            }}
        >
            <Tab.Screen
                name="Tareas"
                options={{
                    title:'Tareas',
                    tabBarLabel: 'Tareas',
                    tabBarIcon: TareasIcon,
                }}
                component={Pagina1Screen}
            />
            <Tab.Screen
                name="Premios"
                options={{
                    title:'Premios',
                    tabBarLabel: 'Premios',
                    tabBarIcon: PremiosIcon,
                }}
                component={Pagina2Screen}
            />
            <Tab.Screen
                name="Castigos"
                options={{
                    title:'Castigos',
                    tabBarLabel: 'Castigos',
                    tabBarIcon: CastigosIcon,
                }}
                component={Pagina3Screen}
            />
        </Tab.Navigator>
    );
};
