import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colores } from '../themes/globalTheme';

const PrimaryButton = (props: any) => {
    const filledBgColor = props.color || colores.primary;
    const outlinedColor = colores.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? colores.white : colores.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style,
            }}
            onPress={ props.onPress }
        >
            <Text style={{ fontSize: 18, ... { color: textColor } }}>{ props.title }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: colores.primary,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PrimaryButton;
