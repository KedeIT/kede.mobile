import { GET_INDEX_TEMPLATE } from './actionTypes';
import http from '../../../service/api';

const GetInitIndexAction = (content) => {
    return {
        type: GET_INDEX_TEMPLATE,
        data: content
    };
}

export const InitIndex = () => {
    return (dispatch) => {
        http.get("/api/feature.json").then((result) => {
            let action = GetInitIndexAction(result.data);
            dispatch(action);
        });
    }
}