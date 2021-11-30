import React, { useReducer } from 'react';
import clientAxios from "../../config/axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
    GET_MOVIES,
    GET_SESSIONS,
    SET_MOVIE,
    SET_DATE,
    SET_MODAL_DATE,
    CLEAR_MODAL_DATE,
    GET_MOVIE_SESSIONS,
    GET_PREMIERE_MOVIES
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
        premieremovies: [],
        sessions: [],
        moviesessions: [],
        movieselected: null,
        dateselected: today,
        modaldateselected: today,
        today: today
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    // Get the sessions with the movies
    const getSessions = async (date) => {
        const params  = { date: date };

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

    const getMovieSessions = async (date, idMovie) => {
        const params  = { date, idMovie };

        try {
            const response = await clientAxios.get(`/api/sessions`, { params });
            dispatch({
                type: GET_MOVIE_SESSIONS,
                payload: response.data.sessions
            });
        } catch (error) {
            console.log(error.response);
            /* dispatch({
                type: ERROR_CREATE_LINK,
                payload: error.response.data.msg
            }); */
        }
    }

    const getPremiereMovies = async () => {
        try {
            const response = await clientAxios.get(`/api/movies/premiere`);
            dispatch({
                type: GET_PREMIERE_MOVIES,
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

    const setModalDate = date => {
        dispatch({
            type: SET_MODAL_DATE,
            payload: date
        });
    }

    const clearModalDate = () => {
        dispatch({
            type: CLEAR_MODAL_DATE
        });
    }

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                premieremovies: state.premieremovies,
                sessions: state.sessions,
                movieselected: state.movieselected,
                dateselected: state.dateselected,
                modaldateselected: state.modaldateselected,
                today: state.today,
                moviesessions: state.moviesessions,
                getSessions,
                selectMovie,
                setDate,
                setModalDate,
                clearModalDate,
                getMovieSessions,
                getPremiereMovies
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieState;