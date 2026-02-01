import HttpError from './HttpError';
import FetchDataType from './type';

async function fetchData<T>(url: string, request: RequestInit = {}): Promise<FetchDataType.FetchDataResponse<T>> {
    try {
        const responce = await fetch(url, request);
        if (!responce.ok) throw new HttpError(responce.status as FetchDataType.ErrorStatusCode);
        const data = await responce.json();
        return { data, status: FetchDataType.responceStatus.SUCCESS, statusCode: responce.status as FetchDataType.SuccessStatusCode };
    } catch (error) {
        console.error(error);
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError(500, { cause: error });
    }
}

export default fetchData;
