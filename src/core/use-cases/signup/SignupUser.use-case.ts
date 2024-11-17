import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { SignupResponse } from '../../../infrastructure/interfaces/lyfer-db.responses';
import { UserMapper } from '../../../infrastructure/mappers/user.mapper';
import type { User } from '../../entities/user.entity';

export const createUser = async (

    fetcher: HttpAdapter,
    name: string,
    email: string,
    password: string

): Promise<User> => {

    try {

        const response = await fetcher.post<SignupResponse>(
            '/auth/register',
            {
                'name': name,
                'email': email,
                'password': password,
            }
        );

        return UserMapper.toUser(response);
        
    } catch (error: any) {
        const errorMessage = error?.message || 'Unknown error occurred';
        throw new Error(`Cannot create user - ${errorMessage}`);
    }

};
