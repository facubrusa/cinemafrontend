import React, { useReducer } from 'react';
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
    GET_MOVIES,
    GET_SESSIONS,
    SET_MOVIE,
    CLEAR_MOVIE,
    SET_DATE
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
        dateselected: today
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    // Get the movies
    const getMovies = async (today) => {
        // Get movies from tbl_function with where in 'date' group by in movieId
        const movies = [
            {id: 1, src: 'images/posters/candy-man.jpg', name: 'Candyman', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 2, src: 'images/posters/clue.jpg', name: 'Clue', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 3, src: 'images/posters/free-guy.jpg', name: 'Free Guy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 4, src: 'images/posters/halloween-kills.jpg', name: 'Hallowen kills', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            /* {id: 5, src: 'images/posters/no-time-to-die.jpg', name: 'No time to die', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 6, src: 'images/posters/shang-chi.jpg', name: 'Shang-chi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 7, src: 'images/posters/shaun-of-the-dead.jpg', name: 'Shaun of the dead', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 8, src: 'images/posters/the-addams-family-2.jpg', name: 'The addams family 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing', duration: '120', classification: 'ATP'},
            {id: 9, src: 'images/posters/the-many-saints.jpg', name: 'The many saints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top', duration: '120', classification: 'ATP'},
            {id: 10, src: 'images/posters/venom.jpg', name: 'Venom', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming', duration: '120', classification: 'ATP'},
            {id: 11, src: 'images/posters/eternals.jpg', name: 'Eternals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming', duration: '120', classification: 'ATP'},
            {id: 12, src: 'images/posters/the-doors.jpg', name: 'The doors', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming', duration: '120', classification: 'ATP'},
            {id: 13, src: 'images/posters/dune.jpg', name: 'Dune', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming', duration: '120', classification: 'ATP'},
            {id: 14, src: 'images/posters/dune.jpg', name: 'Dune', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top', duration: '120', classification: 'ATP'},
            {id: 15, src: 'images/posters/eternals.jpg', name: 'Eternals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top', duration: '120', classification: 'ATP'} */
        ];

        // Simulating query
        setTimeout(function(){ 
            dispatch({
                type: GET_MOVIES,
                payload: movies
            });
        }, 3000);
    }

    const getSessions = async (date) => {
        // Get functions from tbl_functions and filter for movieId
        const sessions = [
            {id: 1, date: '2021-10-27', time: '17:30', movieId: 1, start: '2021-10-27T17:30:00'},
            {id: 2, date: '2021-10-27', time: '19:00', movieId: 1, start: '2021-10-27T19:00:00'},
            {id: 3, date: '2021-10-27', time: '22:00', movieId: 1, start: '2021-10-27T22:00:00'},
            {id: 4, date: '2021-10-27', time: '23:00', movieId: 1, start: '2021-10-27T23:00:00'},
            {id: 5, date: '2021-10-28', time: '18:30', movieId: 1, start: '2021-10-27T18:30:00'},
            {id: 6, date: '2021-10-28', time: '23:00', movieId: 1, start: '2021-10-27T23:00:00'},
            {id: 7, date: '2021-10-29', time: '19:30', movieId: 1, start: '2021-10-27T19:30:00'},
            {id: 8, date: '2021-10-29', time: '23:30', movieId: 1, start: '2021-10-27T23:30:00'},
            {id: 9, date: '2021-10-30', time: '20:30', movieId: 1, start: '2021-10-27T20:30:00'},
            {id: 10, date: '2021-10-27', time: '17:30', movieId: 2, start: '2021-10-27T17:30:00'},
            {id: 11, date: '2021-10-27', time: '19:00', movieId: 2, start: '2021-10-27T19:00:00'},
            {id: 12, date: '2021-10-28', time: '22:00', movieId: 2, start: '2021-10-27T22:00:00'}
        ];

        // Simulating query
        setTimeout(function(){ 
            dispatch({
                type: GET_SESSIONS,
                payload: sessions
            });

            
        }, 3000);
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

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                sessions: state.sessions,
                movieselected: state.movieselected,
                dateselected: state.dateselected,
                getMovies,
                getSessions,
                selectMovie,
                setDate
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieState;