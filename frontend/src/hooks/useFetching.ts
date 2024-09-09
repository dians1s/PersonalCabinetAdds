import { useState } from "react"

type Callback = (page: number, limit: number) => Promise<void>;

export const useFetching = (callback: Callback): [(page: number, limit: number) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getFetch = async (...args: Parameters<Callback>) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e: unknown) {
            if (e instanceof Error) setError(e.message);
            else setError('Catch unknown error.');
        } finally {
            setIsLoading(false);
        }
    }

    return [getFetch, isLoading, error];
}