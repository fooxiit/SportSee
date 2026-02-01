import { useEffect, useState } from 'react';
import HttpError from '../data/fetchData/HttpError';
/**
 * @description hook to fetch data from an async function
 * @param fetchingFunction fetching function
 * @param param parameters for the fetching function
 * @returns returns an object with isLoading, onError and data properties
 */
function useFetchData<T>(fetchingFunction: ({}: any) => Promise<T>, param = {}): ResponceType<T> {
    const [responce, setResponce] = useState<ResponceType<T>>({ status: STATUS.LOADING });
    useEffect(() => {
        let isCleanUp = false;
        const abortSingnal = new AbortController();
        async function fetching() {
            try {
                setResponce({ status: STATUS.LOADING });
                const data = await fetchingFunction({ ...param, signal: abortSingnal.signal });
                if (!isCleanUp) {
                    setResponce({ status: STATUS.SUCCESS, data: data });
                }
            } catch (error: any) {
                if (!isCleanUp) {
                    if (error.name !== 'AbortError') {
                        if (error instanceof HttpError) {
                            setResponce({ status: STATUS.ERROR, error });
                        } else {
                            setResponce({ status: STATUS.ERROR, error: new HttpError(500, { cause: error }) });
                        }
                    }
                }
            }
        }
        fetching();
        return () => {
            isCleanUp = true;
            abortSingnal.abort();
        };
    }, [fetchingFunction, param]);

    return responce;
}

export default useFetchData;

export enum STATUS {
    ERROR,
    SUCCESS,
    LOADING,
}

interface LoadingResponce {
    status: STATUS.LOADING;
}

interface ErrorResponce {
    status: STATUS.ERROR;
    error: HttpError;
}
interface SuccessResponce<T> {
    status: STATUS.SUCCESS;
    data: T;
}

type ResponceType<T> = LoadingResponce | ErrorResponce | SuccessResponce<T>;
