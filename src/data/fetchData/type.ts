/**
 * Fetch Data Types Namespace
 */
namespace FetchDataType {
    /**
     * Success status codes types
     */
    export type SuccessStatusCode = 200 | 201 | 202 | 203 | 204;
    /**
     * Error status codes types
     */
    export type ErrorStatusCode = 400 | 401 | 403 | 404 | 500 | 502 | 503 | 504;

    /**
     * Fetch Data Response sucess inerface
     * @param data Data of generic type T
     * @param status Status of the response as responceStatus.SUCCESS @see responceStatus
     * @param statusCode HTTP status code of the response as SuccessStatusCode
     */
    export interface FetchDataResponseSucess<T> {
        data: T;
        status: responceStatus.SUCCESS;
        statusCode: SuccessStatusCode;
    }

    /**
     * Fetch Data Response error inerface
     * @param status Status of the response as responceStatus.ERROR @see responceStatus
     * @param error Boolean indicating if there was an error
     * @param statusCode HTTP status code of the response as ErrorStatusCode
     * @param message Optional error message
     */
    export interface FetchDataResponseError {
        status: responceStatus.ERROR;
        error: true;
        statusCode: ErrorStatusCode;
        message?: string;
    }
    /**
     * Fetch Data Response type as a union of success and error interfaces
     */
    export type FetchDataResponse<T> = FetchDataResponseSucess<T> | FetchDataResponseError;
    /**
     * Responce status enum
     */
    export enum responceStatus {
        SUCCESS,
        ERROR,
    }
}
export default FetchDataType;
