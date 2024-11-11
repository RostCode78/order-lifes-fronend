export abstract class HttpAdapter {

    abstract post<T>( 
        url: string,
        body?: Record<string, unknown>
    ): Promise<T>;

}
