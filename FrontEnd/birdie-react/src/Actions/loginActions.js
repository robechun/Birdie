import {FETCH_TOKEN, NEW_TOKEN} from "./types";
import axios from 'axios';


export const fetchToken = () => dispatch => {
    console.log("jank");
    const queryURL = "http://localhost:8080/signin"
    let user = {};
    axios({
            method: 'post',
            url: queryURL,
            data: user,
            headers: {'Content-Type': 'application/json'},
        }).then((response) => {
            dispatch({
                type : FETCH_TOKEN,
                payload : response
            })
        }).catch((error) => {
            console.log(error);
        });

}


