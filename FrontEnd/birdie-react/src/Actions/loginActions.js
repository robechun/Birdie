import {FETCH_TOKEN, NEW_TOKEN} from "./types";
import axios from 'axios';

// //Get
// export const fetchToken = () => dispatch => {
//     console.log("action called here");
//     const queryURL = "http://localhost:8080/signin"
//     let user = {
//         username: "tester",
//         password: "password"
//     };
//     axios({
//             method: 'post',
//             url: queryURL,
//             data: user,
//             headers: {'Content-Type': 'application/json'},
//         }).then((response) => {
//             dispatch({
//                 type : FETCH_TOKEN,
//                 payload : response
//             })
//         }).catch((error) => {
//             console.log(error);
//         });
//
// }

// Post
export const newToken = (userData) => dispatch => {
    console.log("action called here");
    console.log(userData);
    const queryURL = "http://159.65.72.45:8080/signin"
    axios({
            method: 'post',
            url: queryURL,
            data: userData,
            headers: {'Content-Type': 'application/json'},
        }).then((response) => {
            dispatch({
                type : NEW_TOKEN,
                payload : response
            })
        }).catch((error) => {
            console.log(error);
        });
}

