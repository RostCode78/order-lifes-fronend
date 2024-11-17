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

export const GhostButton = ( Props: Props ) => {
    return (
        <Pressable
            onPress={ Props.onPress }
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
    textButton: {
        fontSize: RFValue(12),
        fontWeight: 'regular',
        color: '#808080',
        textAlign: 'center',
    },
});
