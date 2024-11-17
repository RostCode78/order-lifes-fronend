import { useState, useEffect } from 'react';
import * as UseCases from './../../core/use-cases';
import { lyferDBFetcher } from '../../config/adapters/lyferDB.adapter';
import { User } from '../../core/entities/user.entity';

interface SignupData {
    name: string;
    email: string;
    password: string;
}

export const useSignup = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ userSignup, setUserSignup ] = useState<User>();

    const loadUserSignup = async ({ name, email, password }: SignupData) => {

        setIsLoading(true);
        setUserSignup( undefined );

        try {

            const user = await UseCases.createUser(
                lyferDBFetcher,
                name,
                email,
                password
            );

            setUserSignup(user);
            console.log(user);
            
        } catch (error) {
            console.error('Error al crear Usuario', error);
        } finally {
            setIsLoading(false);
        }

    };

    return {
        isLoading,
        userSignup,
        loadUserSignup,
    };

};
