import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20,
        }}>
            <Text>Bienvenido, inicia sesión</Text>
        </View>
    );
};

export default LoginScreen;
