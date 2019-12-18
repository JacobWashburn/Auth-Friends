import {getAllFriends} from './GetFriends';
import {axiosWithAuth} from '../Utils/axiosWithAuth';

export const PUT_FRIEND_START = 'PUT_FRIEND_START';
export const PUT_FRIEND_SUCCESS = 'PUT_FRIEND_SUCCESS';
export const PUT_FRIEND_FAILURE = 'PUT_FRIEND_FAILURE';
export const STOP_EDITING = 'RESET_EDITING';

export const stopEditing = () => dispatch => {
    dispatch({type:STOP_EDITING})
};

export const startEditing = id => dispatch => {
    dispatch({type:PUT_FRIEND_START,payload:id})
};

export const putFriend = friend => dispatch => {
    axiosWithAuth()
        .put(`/friends/${friend.id}`,friend)
        .then(res => {
            console.log('put res', res)
            dispatch({type:PUT_FRIEND_SUCCESS,payload:res.data})
        })
        .catch(error => {
            dispatch({type:PUT_FRIEND_FAILURE,payload:error.message})
        })
}