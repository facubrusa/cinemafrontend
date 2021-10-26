import React, { useReducer } from 'react';
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
    GET_MOVIES,
    GET_SESSIONS
} from '../../types/index';

const MovieState = ({children}) => {

    const initialState = {
        movies: [],
        sessions: []
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    // Get the movies
    const getMovies = async () => {
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

        dispatch({
            type: GET_MOVIES,
            payload: movies
        });
    }

    const getSessions = async (date) => {
        console.log(date);
        
        const sessions = [
            {id: 1, date: '2021-10-23', movieId: 1, start: '2021-10-23T22:00:00'},
            {id: 2, date: '2021-10-23', movieId: 1, start: '2021-10-23T19:30:00'},
            {id: 3, date: '2021-10-23', movieId: 2, start: '2021-10-23T22:00:00'},
            {id: 4, date: '2021-10-23', movieId: 2, start: '2021-10-23T19:30:00'},
            {id: 5, date: '2021-10-23', movieId: 3, start: '2021-10-23T22:00:00'},
            {id: 6, date: '2021-10-23', movieId: 3, start: '2021-10-23T19:30:00'},
            {id: 7, date: '2021-10-23', movieId: 4, start: '2021-10-23T22:00:00'},
            {id: 8, date: '2021-10-23', movieId: 4, start: '2021-10-23T19:30:00'}
        ];

        let filter = sessions.filter(sesion => sesion.date === date);

        dispatch({
            type: GET_SESSIONS,
            payload: filter
        });
    }

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                sessions: state.sessions,
                getMovies,
                getSessions
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieState;