import { AxiosAdapter } from './http/axios.adapter';

export const lyferDBFetcher = new AxiosAdapter({
    // baseUrl: 'https://api.lyfer.com',
    // Usar la ip local para pruebas en el emulador de Android
    baseUrl: 'http://192.168.0.108:5001',
    body: {},
});
