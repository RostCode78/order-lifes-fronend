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

import { useLogin } from '../../hooks/useLogin';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';


interface Props {
    navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: Props ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const GoToSignup = () => {
        navigation.navigate('Signup');
    };

    /*====================
    =    useLoginHook    =
    ====================*/

    const { isLoading, userLogin, loadUserLogin } = useLogin();

    const handleLoginUserHook = () => {
        loadUserLogin({ email, password });

        console.log( userLogin );
    };

    return (
        <View
            style={styles.container}
        >
            <Text>Hola Amigo</Text>

            <View style={ styles.contentLogin }>

                <View style={ styles.contentLoginTop }>

                    <Image
                        source={require('../../../../assets/lyferLogo.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            opacity: 1,
                        }}
                    />

                </View>

                <View style={ styles.contentLoginMiddle }>

                    <Text style={ styles.textWhite48 }>Inicia Sesión</Text>

                    <View style={ styles.contentForm }>

                    </View>

                </View>

                <View style={ styles.contentLoginBottom }>

                    <Text style={ styles.textGrey18 }>Aun no tienes una cuenta?</Text>

                    <SecondaryButton
                        title="Regístrate"
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

    // Content Login Top

    contentLoginTop: {
        width: '80%',
        height: '100%',
        maxHeight: 250,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Content Login Middle

    contentLoginMiddle: {
        justifyContent: 'center',
        gap: 42,
    },
    contentForm: {
        gap: 24,
        minHeight: 50,
        borderWidth: 1,
        borderColor: 'red',
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
        fontSize: 18,
        fontWeight: 'regular',
    },
    textWhite48: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
