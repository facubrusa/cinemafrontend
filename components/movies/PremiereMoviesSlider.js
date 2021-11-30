import React, { useEffect, useContext } from 'react';
import Slider from "react-slick";
import Movie from './Movie';
import MovieContext from '../../context/movies/MovieContext';
import { MainMoviesSlider } from '../Sliders';

const PremiereMoviesSlider = () => {
    // Extract the movies from initial state
    const movieContext = useContext(MovieContext);
    const { premieremovies, getPremiereMovies, selectMovie } = movieContext;

    useEffect(() => {
        getPremiereMovies();
    }, []);

    let infiniteStatus = (premieremovies.length > 3) ? true : false;
    MainMoviesSlider.infinite = infiniteStatus;

    return ( 
        <div className="wrap-slick2">
            {/* Slide2 */}
            { premieremovies.length === 0 ? (
                <div className="p-t-100 p-b-100 text-center">
                    <img src="images/icons/film-tape.svg" />
                    <h2>
                        No movie premieres :v
                    </h2>
                </div>
            ) : (
                <Slider {...MainMoviesSlider}>
                    { premieremovies.map(movie => (
                        <Movie 
                            key={movie.idMovie}
                            movie={movie}
                            sessions={[]}
                            selectMovie={selectMovie}
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
 
export default PremiereMoviesSlider;