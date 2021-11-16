import {
    GET_MOVIES,
    GET_SESSIONS,
    SET_MOVIE,
    CLEAR_MOVIE,
    SET_DATE,
    SET_MODAL_DATE,
    CLEAR_MODAL_DATE,
    GET_MOVIE_SESSIONS
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
        case SET_MODAL_DATE:
            return {
                ...state,
                modaldateselected: action.payload
            }
        case CLEAR_MODAL_DATE:
            return {
                ...state,
                modaldateselected: state.today
            }
        case GET_MOVIE_SESSIONS:
            return {
                ...state,
                moviesessions: action.payload
            }
        default:
            return state;
    }
}

export default MovieReducer;