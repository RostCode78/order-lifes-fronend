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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { API_URL_DEV } from '@env';

import LinearGradient from 'react-native-linear-gradient';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { useForm, Controller } from 'react-hook-form';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSignup } from '../../hooks/useSignup';

interface Props {
    navigation: NavigationProp<any>;
}

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignupScreen = ({ navigation }: Props ) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {

            if (password !== confirmPassword) {
                throw new Error('Las contraseñas no coinciden.');
            }

            // Send a POST request to the login endpoint with the user's email and password
            const res = await fetch(`${API_URL_DEV}auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password,
                }),
            });

            // If the response is not successful, throw an error
            if (!res.ok) {
                throw new Error('Error al registrar un nuevo usuario.');
            }

            // Parse the response data
            const data = await res.json();

            // Clear the error state
            setError('');

            // Store the user token in AsyncStorage
            await AsyncStorage.setItem('userToken', data.token);

            // Navigate to the Dashboard screen
            navigation.navigate('Dashboard');

        } catch (error:any) {
            // If an error occurs, set the error state and log the error
            setError(error.message);
            console.log('Error al registrar un nuevo usuario.', error);
        }
    };

    const GoToLogIn = () => {
        navigation.navigate('Login');
    };

    /*===============
    =    useForm    =
    ===============*/

    // useSingupHook

    const { isLoading, userSignup, loadUserSignup } = useSignup();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = ( data: FormData ) => {

        console.log( data );
        const { name, email, password } = data;
        loadUserSignup({ name, email, password });

    };

    return (    
        <View style={styles.container}>

            <View style={ styles.contentSignup }>

                <Image
                    source={require('../../../../assets/lyferLogo.png')}
                    style={{
                        width: 80,
                        height: 80,
                        objectFit: 'contain',
                        opacity: 1,
                        alignSelf: 'center',
                    }}
                />

                <View style={ styles.boxTitle }>

                    <View style={ styles.textTag }>
                        <Text
                            style={{
                                color: '#f0f1f5',
                                fontSize: RFValue(10),
                                fontWeight: 'regular',
                            }}
                        >Empieza a ordenar tu vida</Text>
                    </View>

                    <Text
                        style={{
                            color: '#ffffff',
                            fontSize: RFValue(28),
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >Crea un usuario</Text>
                    <Text
                        style={{
                            color: '#ffffff',
                            fontSize: RFValue(12),
                            fontWeight: 'regular',
                            textAlign: 'center',
                        }}
                    >Ingresa los datos necesarios</Text>

                </View>

                <View style={{
                    flexDirection: 'column',
                    gap: 24,
                }}>

                    <View style={{ 
                        flexDirection: 'row',
                        alignSelf: 'center',
                        gap: 12,
                    }}>
                        <SecondaryButton
                            urlImage={ require('../../../../assets/icons/google.png') }
                            customStyle={{
                                maxWidth: 60,
                                maxHeight: 36,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 24,
                                paddingVertical: 12,
                            }}
                            customImageStyle={{
                                width: 16,
                                height: 16,
                            }}
                        />
                        <SecondaryButton
                            urlImage={ require('../../../../assets/icons/Facebook.png') }
                            customStyle={{
                                maxWidth: 60,
                                maxHeight: 36,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 24,
                                paddingVertical: 12,
                            }}
                            customImageStyle={{
                                width: 16,
                                height: 16,
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        gap: 24,
                        alignSelf: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: '#808080',
                        }}/>
                        <View style={{
                            width: 12,
                            height: 12,
                            borderWidth: 2,
                            borderColor: '#808080',
                            borderRadius: 25,
                        }}/>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: '#808080',
                        }}/>
                    </View>

                </View>

                <View style={ styles.contentForm }>

                    <Controller
                        control={ control }
                        name="name"
                        rules={{
                            required: 'El nombre es obligatorio',
                        }}
                        render={({ field: { onChange, value } }) => (

                            <CustomInput
                                title="Nombre"
                                placeholder="John Doe"
                                onChange={ onChange }
                                value={ value }
                                type="name"
                            />

                        )}
                    />

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

                    <PrimaryButton
                        title="Registrar usuario"
                        onPress={handleSubmit(onSubmit)}
                    />

                </View>

                <View style={ styles.contentLoginBottom }>

                    <Text style={ styles.textGrey18 }>¿Ya tienes una cuenta?</Text>

                    <SecondaryButton
                        title="Inicia sesión"
                        onPress={ GoToLogIn }
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

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    contentSignup: {
        width: '100%',
        height: '100%',
        paddingVertical: 52,
        paddingHorizontal: 36,
        justifyContent: 'space-between',
        gap: 24,
        zIndex: 2,
    },
    // Content Form
    contentForm: {
        gap: 12,
    },
    // Box Title
    boxTitle: {
        width: '100%',
        minHeight: 25,
    },
    // Text Tag
    textTag: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 25,
        backgroundColor: '#111111',
        borderWidth: 1,
        borderColor: '#2E2E2E',
        alignSelf: 'center',
    },
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
});
