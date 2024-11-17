import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    Text, 
    Image, 
    Pressable,
    StyleSheet,
} from 'react-native';
import { colores, style, Buttons } from '../../../themes/globalTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { API_URL_DEV } from '@env';

import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller } from 'react-hook-form';

import { useLogin } from '../../hooks/useLogin';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { GhostButton } from '../../components/Buttons/GhostButton';
import { RFValue } from 'react-native-responsive-fontsize';


interface Props {
    navigation: NavigationProp<any>;
}

interface FormData {
    email: string;
    password: string;
}

const LoginScreen = ({ navigation }: Props ) => {

    const GoToSignup = () => {
        navigation.navigate('Signup');
    };

    /*===============
    =    useForm    =
    ===============*/

    // useLoginHook

    const { isLoading, userLogin, loadUserLogin } = useLogin();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = ( data: FormData ) => {

        const { email, password } = data;
        loadUserLogin({ email, password });

    };

    return (
        <View
            style={styles.container}
        >
            <View style={ styles.contentLogin }>

                <Image
                    source={require('../../../../assets/lyferLogo.png')}
                    style={{
                        width: 150,
                        height: 150,
                        objectFit: 'contain',
                        alignSelf: 'center',
                    }}
                />

                <View style={{ gap: 48, justifyContent: 'center' }}>

                    <Text style={ styles.textWhite48 }>Inicia Sesión</Text>

                    <View style={{ gap: 12 }}>

                        <Controller
                            control={ control }
                            name="email"
                            rules={{
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Correo no es válido',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (

                                <CustomInput
                                    title="Correo Electrónico"
                                    placeholder="Ingresa tu correo electrónico"
                                    onChange={ onChange }
                                    value={ value }
                                    type="email"
                                />

                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'La contraseña es obligatoria' }}
                            render={({ field: { onChange, value } }) => (
                                <CustomInput
                                    title="Contraseña"
                                    placeholder="Ingresa tu contraseña"
                                    value={value}
                                    onChange={onChange}
                                    isPassword={true}
                                />
                            )}
                        />

                    </View>

                    <View style={{ gap: 12 }}>

                        <PrimaryButton
                            title="Iniciar Sesión"
                            onPress={handleSubmit(onSubmit)}
                        />

                        <GhostButton
                            title="¿Olvidaste tu contraseña?"
                        />

                    </View>

                </View>

                <View style={ styles.contentLoginBottom }>

                    <Text style={ styles.textGrey18 }>¿Aun no tienes una cuenta?</Text>

                    <SecondaryButton
                        title="Regístrate"
                        onPress={ GoToSignup }
                    />

                </View>

            </View>

            <LinearGradient
                colors={['rgba(22, 22, 22, 0.85)', '#111111']}
                style={styles.bgDegrade}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <View style={ styles.bgImage }>
                <Image
                    source={require('../../../../assets/background_login.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#161616',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    bgDegrade: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    // Content Login
    contentLogin: {
        width: '100%',
        height: '100%',
        paddingVertical: 52,
        paddingHorizontal: 36,
        zIndex: 2,
        justifyContent: 'space-between',
    },

    // Content Login Middle -> No hay nada de styles por el momento

    // Content Login Bottom

    contentLoginBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 12,
        // position: 'absolute',
        // bottom: 52,
    },

    // Text

    textGrey18: {
        color: '#808080',
        fontSize: RFValue(12),
        fontWeight: 'regular',
    },
    textWhite48: {
        color: '#fff',
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
