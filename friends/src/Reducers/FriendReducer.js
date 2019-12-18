import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE,
    POST_FRIEND_START,
    POST_FRIEND_SUCCESS,
    POST_FRIEND_FAILURE,
    PUT_FRIEND_START,
    PUT_FRIEND_SUCCESS,
    PUT_FRIEND_FAILURE,
    STOP_EDITING
} from '../Actions';

const initialState = {
    friendsList: [],
    isFetching: false,
    isEditing: false,
    isLoggingIn: false,
    isPosting: false,
    editId: '',
    error: '',
    loggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friendsList: action.payload
            };
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case POST_LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            };
        case POST_LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true
            };
        case POST_LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            };
        case POST_FRIEND_START:
            return {
                ...state,
                isPosting: true
            };
        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                isPosting: false,
                friendsList: action.payload
            };
        case POST_FRIEND_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
        case PUT_FRIEND_START:
            return {
                ...state,
                isEditing: true,
                editId: action.payload
            };
        case PUT_FRIEND_SUCCESS:
            return {
                ...state,
                isEditing: false,
                friendsList: action.payload
            };
        case PUT_FRIEND_FAILURE:
            return {
                ...state,
                isEditing: false,
                error: action.payload
            };
        case STOP_EDITING:
            return {
                ...state,
                isEditing: false,
                editId: ''
            };
        default:
            return state;
    }
};

export default reducer;