import {
    GET_MOVIES,
    GET_SESSIONS,
    SET_MOVIE,
    CLEAR_MOVIE,
    SET_DATE,
    SET_TODAY
} from '../../types/index';

const MovieReducer = (state, action) => {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case GET_SESSIONS:
            return {
                ...state,
                sessions: action.payload
            }
        case SET_MOVIE:
            return {
                ...state,
                movieselected: action.payload
            }
        case SET_DATE:
            return {
                ...state,
                dateselected: action.payload
            }
        case SET_TODAY:
            return {
                ...state,
                dateselected: state.today
            }
        default:
            return state;
    }
}

export default MovieReducer;