import {
    GET_MOVIES,
    GET_SESSIONS
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
        default:
            return state;
    }
}

export default MovieReducer;