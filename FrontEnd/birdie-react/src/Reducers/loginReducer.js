import {FETCH_TOKEN, NEW_TOKEN} from "../Actions/types";

const initialState = {
    accessToken :  "",
    response : {}
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_TOKEN:
            return {
                ...state,
                accessToken : action.payload
            }
        default:
            return state;
    }
}