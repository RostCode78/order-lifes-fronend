import { StyleSheet } from 'react-native';

export const colores = {
    bgPrimary: '#362A34',
    white: '#FFF',
    black: '#000',
    grey100: '#F3F4F6',
    grey200: '#E6E7EB',
    grey300: '#D1D4DB',
    grey400: '#9CA2AE',
    grey500: '#6B7380',
    grey600: '#4C5564',
    grey700: '#384152',
    grey800: '#202938',
    grey900: '#111828',
};

export const style = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
});

export const Buttons = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colores.grey800,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 0,
    },
    buttonText: {
        color: colores.white,
        fontSize: 18,
        fontWeight: 500,
    },
});
