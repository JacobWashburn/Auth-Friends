import {axiosWithAuth} from '../Utils/axiosWithAuth';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const getAllFriends = () => dispatch => {
    dispatch({type: GET_FRIENDS_START});
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            dispatch({type:GET_FRIENDS_SUCCESS,payload:res.data})
        })
        .catch(error => {
            dispatch({type:GET_FRIENDS_FAILURE,payload:error})
    })
};