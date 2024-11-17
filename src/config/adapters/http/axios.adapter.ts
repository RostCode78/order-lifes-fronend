import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
    baseUrl: string;
    body: Record<string, unknown>;
    params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor( options: Options ) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
        });
    }

    async post<T>(
        url: string,
        body?: Record<string, unknown> | undefined,
        params?: Record<string, string> | undefined
    ): Promise<T> {

        try {
            const { data } = await this.axiosInstance.post<T>( url, body, { params } );
            return data;
        } catch ( error: unknown ) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Axios error in POST: ${error.message}`);
            }
            throw new Error(`Unexpected error in POST: ${String(error)}`);
        }

    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get<T>(url, { ...options });
            return data;
        } catch ( error: unknown ) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Axios error in GET: ${error.message}`);
            }
            throw new Error(`Unexpected error in GET: ${String(error)}`);
        }
    }

}
