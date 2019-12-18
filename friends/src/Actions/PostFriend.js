import {axiosWithAuth} from '../Utils/axiosWithAuth';

export const POST_FRIEND_START = 'POST_FRIEND_START';
export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
export const POST_FRIEND_FAILURE = 'POST_FRIEND_FAILURE';

export const postFriend = friend => dispatch => {
    dispatch({type: POST_FRIEND_START});
    axiosWithAuth()
        .post('/friends', friend)
        .then(res => {
            console.log('post friend res', res);
            dispatch({type: POST_FRIEND_SUCCESS, payload: res.data});
        })
        .catch(error => {
            dispatch({type: POST_FRIEND_FAILURE, payload: error.message});
        });
};