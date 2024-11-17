import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    title: string;
    placeholder: string;
    onChange: any;
    value: string;
    type?: string;
    isPassword?: boolean;
}

export const CustomInput = ( props: Props ) => {
    return (
        <View style={ styles.containerInput }>

            { props.title && <Text style={ styles.textTitle }>{ props.title }</Text>}

            <TextInput
                style={ styles.input }
                placeholder={ props.placeholder }
                placeholderTextColor="#2E2E2E" 
                onChangeText={ props.onChange }
                value={ props.value }
                secureTextEntry={ props.isPassword }
                keyboardType={ props.type === 'email' ? 'email-address' : 'default' }
                importantForAutofill="no"
            />

        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: '#111111',
        borderWidth: 1,
        borderColor: '#2e2e2e',
        padding: 12,
        borderRadius: 10,
        gap: 2,
    },
    textTitle: {
        color: '#E5E5E5',
        fontSize: RFValue(12),
        fontWeight: 'regular',
    },
    input: {
        color: '#f0f1f5',
        fontSize: RFValue(12),
        padding: 0,
    },
});
