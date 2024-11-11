import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
    baseUrl: string;
    body: Record<string, unknown>;
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor( options: Options ) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            data: options.body,
        });
    }

    async post<T>(
        url: string,
        body?: Record<string, unknown> | undefined
    ): Promise<T> {

        try {
            const { data } = await this.axiosInstance.post<T>( url, body );
            return data;
        } catch (error) {
            throw new Error(`Error in AxiosAdapter.post: ${error}`);
        }

    }

}
