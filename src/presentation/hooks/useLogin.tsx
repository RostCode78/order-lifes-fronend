import { useState, useEffect } from 'react';
import * as UseCases from './../../core/use-cases';
import { lyferDBFetcher } from '../../config/adapters/lyferDB.adapter';
import { UserData } from '../../core/entities/user.entity';

interface LoginData {
    email: string;
    password: string;
}

export const useLogin = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ userLogin, setUserLogin ] = useState<UserData>();

    const loadUserLogin = async ({ email, password }: LoginData) => {

        setIsLoading(true);
        setUserLogin( undefined );

        try {

            const user = await UseCases.getUserByEmail(
                lyferDBFetcher,
                email,
                password
            );

            setUserLogin(user);
            
        } catch (error) {
            console.error('Error al iniciar Sesión', error);
        } finally {
            setIsLoading(false);
        }

    };

    return {
        isLoading,
        userLogin,
        loadUserLogin,
    };

};
