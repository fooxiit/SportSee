namespace FetchDataType {
    export type SuccessStatusCode = 200 | 201 | 202 | 203 | 204;
    export type ErrorStatusCode = 400 | 401 | 403 | 404 | 500 | 502 | 503 | 504;

    interface FetchDataResponseSucess<T> {
        data: T;
        status: responceStatus.SUCCESS;
        statusCode: SuccessStatusCode;
    }

    interface FetchDataResponseError {
        status: responceStatus.ERROR;
        error: true;
        statusCode: ErrorStatusCode;
        message?: string;
    }
    export type FetchDataResponse<T> = FetchDataResponseSucess<T> | FetchDataResponseError;

    export enum responceStatus {
        SUCCESS,
        ERROR,
    }
}
export default FetchDataType;
