import {FETCH_TOKEN, NEW_TOKEN} from "../Actions/types";

const initialState = {
    accessToken :  {},
    response : {}
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_TOKEN:
            console.log("reducer for Fetch Token Called");
            return {
                ...state,
                accessToken : action.payload
            }
        case NEW_TOKEN:
            console.log("reducer for New Token Called")
            return {
                ...state,
                accessToken : action.payload
            }
        default:
            return state;
    }
}

