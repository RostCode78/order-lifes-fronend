import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
    title?: string;
}

export const SecondaryButton = ( Props: Props ) => {
    return (
        <View>
            <Pressable
                onPress={() => console.log('Secondary Button')}
                style={ styles.containerButton }
            >
                { Props.title !== '' &&
                    <Text
                        style={ styles.textButton }
                    >{ Props.title }</Text>
                }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: '#111111',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2e2e2e',
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'regular',
        color: '#fff',
        textAlign: 'center',
    },
});
