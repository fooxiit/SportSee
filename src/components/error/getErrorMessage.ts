import STRING from '../../constante/String';
import FetchDataType from '../../data/fetchData/type';
/**
 * @description Get the error message corresponding to the given status code.
 */
export default function getErroeMessage(statueCode: FetchDataType.ErrorStatusCode) {
    switch (statueCode) {
        case 400:
            return STRING.FR.ERRORS[400];
        case 401:
            return STRING.FR.ERRORS[401];
        case 403:
            return STRING.FR.ERRORS[403];
        case 404:
            return STRING.FR.ERRORS[404];
        case 500:
            return STRING.FR.ERRORS[500];
        case 502:
            return STRING.FR.ERRORS[502];
        case 503:
            return STRING.FR.ERRORS[503];
        case 504:
            return STRING.FR.ERRORS[504];

        default:
            throw new Error(`Invalide status code ${statueCode satisfies never}`);
            break;
    }
}
