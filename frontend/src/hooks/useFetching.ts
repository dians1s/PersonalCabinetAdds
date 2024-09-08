import { useState } from "react"

type Callback = () => Promise<void>;

export const useFetching = (callback: Callback): [() => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getFetch = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e: unknown) {
            if (e instanceof Error) setError(e.message);
            else setError('Catch unknown error.');
        } finally {
            setIsLoading(false);
        }
    }

    return [getFetch, isLoading, error];
}