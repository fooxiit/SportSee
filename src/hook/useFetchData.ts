import { useEffect, useState } from 'react';

function useFetchData(fetchingFunction, param = {}) {
    const [isLoading, setIsLoading] = useState(true);
    const [onError, setOnError] = useState({ onError: false });
    const [data, setData] = useState(null);
    useEffect(() => {
        const abortSingnal = new AbortController();
        async function fetching() {
            try {
                const data = await fetchingFunction({ ...param, signal: abortSingnal.signal });
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setOnError((prev) => ({ ...prev, onError: true, errorMessage: error.message, errorStatus: error.status }));
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
