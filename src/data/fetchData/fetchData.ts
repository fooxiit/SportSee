import FetchDataType from './type';

async function fetchData<T>(url: string, request: RequestInit = {}): Promise<FetchDataType.FetchDataResponse<T>> {
    try {
        const responce = await fetch(url, request);
        if (!responce.ok) return { error: true, status: FetchDataType.responceStatus.ERROR, statusCode: responce.status as FetchDataType.ErrorStatusCode };
        const data = await responce.json();
        return { data, status: FetchDataType.responceStatus.SUCCESS, statusCode: responce.status as FetchDataType.SuccessStatusCode };
    } catch (error) {
        console.error(error);
        return { error: true, status: FetchDataType.responceStatus.ERROR, statusCode: 500, message: 'internal server error' };
    }
}

export default fetchData;
