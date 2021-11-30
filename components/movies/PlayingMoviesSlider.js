import React, { useEffect, useContext } from 'react';
import Slider from "react-slick";
import Movie from './Movie';
import MovieContext from '../../context/movies/MovieContext';
import { MainMoviesSlider } from '../Sliders';

const PlayingMoviesSlider = () => {
    // Extract the movies from initial state
    const movieContext = useContext(MovieContext);
    const { movies, sessions, dateselected, getSessions, selectMovie } = movieContext;

    useEffect(() => {
        getSessions(dateselected);
    }, [dateselected]);
    
    let infiniteStatus = (movies.length > 3) ? true : false;
    MainMoviesSlider.infinite = infiniteStatus;

    return ( 
        <div className="wrap-slick2">
            {/* Slide2 */}
            { movies.length === 0 ? (
                <div className="p-b-100 text-center">
                    <img src="images/icons/film-tape.svg" />
                    <h3>
                        No movies to show, come back later :c
                    </h3>
                </div>
            ) : (
                <Slider {...MainMoviesSlider}>
                    { movies.map(movie => (
                        <Movie 
                            key={movie.idMovie}
                            movie={movie}
                            sessions={sessions}
                            selectMovie={selectMovie}
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
 
export default PlayingMoviesSlider;