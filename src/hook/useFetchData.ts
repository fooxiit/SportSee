import { useEffect, useState } from 'react';

function useFetchData<T>(fetchingFunction: ({}: any) => Promise<T>, param = {}): { isLoading: boolean; onError: { onError: boolean; cause?: any }; data: T | null } {
    const [isLoading, setIsLoading] = useState(true);
    const [onError, setOnError] = useState({ onError: false });
    const [data, setData] = useState<T | null>(null);
    useEffect(() => {
        const abortSingnal = new AbortController();
        async function fetching() {
            try {
                const data = await fetchingFunction({ ...param, signal: abortSingnal.signal });
                setData(data);
                setIsLoading(false);
            } catch (error: any) {
                setOnError((prev) => ({ ...prev, onError: true, cause: error }));
            }
        }
        fetching();
        /* return () => {
            abortSingnal.abort();
        }; */
    }, [fetchingFunction, param]);

    return { isLoading, onError, data };
}

export default useFetchData;
