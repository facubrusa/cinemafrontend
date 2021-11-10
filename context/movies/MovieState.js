import React, { useReducer } from 'react';
import clientAxios from "../../config/axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
    GET_MOVIES,
    GET_SESSIONS,
    SET_MOVIE,
    CLEAR_MOVIE,
    SET_DATE,
    SET_TODAY
} from '../../types/index';

const MovieState = ({children}) => {

    // Create today
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;

    const initialState = {
        movies: [],
        sessions: [],
        movieselected: null,
        dateselected: today,
        today: today
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    // Get the sessions with the movies
    const getSessions = async (date) => {
        const params  = { date: date }

        try {
            const response = await clientAxios.get(`/api/sessions`, { params });
            dispatch({
                type: GET_SESSIONS,
                payload: response.data.sessions
            });

            dispatch({
                type: GET_MOVIES,
                payload: response.data.movies
            });

        } catch (error) {
            console.log(error.response);
            /* dispatch({
                type: ERROR_CREATE_LINK,
                payload: error.response.data.msg
            }); */
        }
    }

    const selectMovie = movieId => {
        dispatch({
            type: SET_MOVIE,
            payload: movieId
        });
    }

    const setDate = date => {
        dispatch({
            type: SET_DATE,
            payload: date
        });
    }

    const setToday = () => {
        dispatch({
            type: SET_TODAY
        });
    }

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                sessions: state.sessions,
                movieselected: state.movieselected,
                dateselected: state.dateselected,
                today: state.today,
                getSessions,
                selectMovie,
                setDate,
                setToday
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieState;