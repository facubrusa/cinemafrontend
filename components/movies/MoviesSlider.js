import React, { useState, useEffect, useContext } from 'react';
import Slider from "react-slick";
import Movie from './Movie';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MovieContext from '../../context/movies/MovieContext';

function SampleNextArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick2 next-slick2 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight} size="xs" /></button>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick2 prev-slick2 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft} size="xs" /></button>
    );
}

const MoviesSlider = () => {
    // Extract the movies from initial state
    const movieContext = useContext(MovieContext);
    const { movies, sessions, dateselected, getSessions, selectMovie } = movieContext;

    useEffect(() => {
        getSessions(dateselected);
    }, [dateselected]);
    
    let infiniteStatus = (movies.length > 3) ? true : false;
    const settings = {
        infinite: infiniteStatus,
        speed: 600,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return ( 
        <div className="wrap-slick2">
            {/* Slide2 */}
            {movies.length === 0 ? (
                <div className="p-t-100 p-b-100">
                    <h2 className="text-center">
                        No movies to show, come back later :c
                    </h2>
                </div>
            ) : (
                <Slider {...settings}>
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
 
export default MoviesSlider;