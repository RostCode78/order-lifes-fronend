import React from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    title?: string;
    onPress?: () => void;
    urlImage?: any;
    customStyle?: any;
}

export const CtaButton = ( Props: Props ) => {
    return (
        <Pressable
            onPress={ Props.onPress }
            style={[ styles.containerButton, Props.customStyle ]}
        >
            { Props.title &&
                <Text
                    style={ styles.textButton }
                >{ Props.title }</Text>
            }

            {Props.urlImage && (
                <Image
                    source={Props.urlImage}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                />
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: '#f0f1f5',
        maxHeight: 60,
        paddingVertical: 12,
        paddingLeft: 36,
        paddingRight: 17,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#161616',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textButton: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: '#161616',
        textAlign: 'center',
    },
});
