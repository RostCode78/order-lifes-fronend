import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Verificar si hay un token almacenado en AsyncStorage
AsyncStorage.getItem('userToken')
    .then((token) => {
        if (token) {
            authInitialState.isLoggedIn = true;
        }
    })
    .catch((error) => {
        console.log('Error retrieving token from AsyncStorage:', error);
    });

// Lo usaremos para decirle a React Native como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: ( iconName: string ) => void;
    changeUsername: ( userName: string ) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    dispatch({ type: 'signIn' });
                }
            } catch (error) {
                console.log('Error reading token from AsyncStorage:', error);
            }
        };

        checkToken();
    }, []);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
