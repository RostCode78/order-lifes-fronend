import React from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    title?: string;
    onPress?: () => void;
}

export const PrimaryButton = ( Props: Props ) => {
    return (
        <Pressable
            onPress={ Props.onPress }
            style={ styles.containerButton }
        >
            { Props.title !== '' &&
                <Text
                    style={ styles.textButton }
                >{ Props.title }</Text>
            }
        </Pressable>
    );
};

const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: '#f0f1f5',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#161616',
    },
    textButton: {
        fontSize: RFValue(14),
        fontWeight: 'regular',
        color: '#161616',
        textAlign: 'center',
    },
});
