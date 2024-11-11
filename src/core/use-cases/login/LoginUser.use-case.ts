import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { LoginResponse } from '../../../infrastructure/interfaces/lyfer-db.responses';
import { UserMapper } from '../../../infrastructure/mappers/user.mapper';
import type { UserData } from '../../entities/user.entity';

export const getUserByEmail = async (
    fetcher: HttpAdapter,
    email: string,
    password: string
): Promise<UserData> => {

    try {

        const response = await fetcher.post<LoginResponse>(
            '/auth/login', 
            {
                'email': email,
                'password': password,
            }
        );

        return UserMapper.toUserData(response);
        
    } catch (error: any) {
        const errorMessage = error?.message || 'Unknown error occurred';
        throw new Error(`Cannot get user - ${errorMessage}`);
    }

};
