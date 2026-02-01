import getErroeMessage from '../../components/error/getErrorMessage';
import FetchDataType from './type';

export default class HttpError extends Error {
    constructor(statusCode: FetchDataType.ErrorStatusCode, option?: ErrorOptions) {
        super('', option);
        this.name = 'HTTP_ERROR';
        this.message = getErroeMessage(statusCode);
    }
}
