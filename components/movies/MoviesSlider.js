import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Movie from './Movie';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UseFilterCategory from '../../hooks/useFilterCategory';

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


    const [listMovies, setListMovies] = useState([]);
    const { category, FilterCategoryUI } = UseFilterCategory();

    const movies = [
        {id: 1, src: 'images/posters/candy-man.jpg', name: 'Candyman', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 2, src: 'images/posters/clue.jpg', name: 'Clue', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 3, src: 'images/posters/free-guy.jpg', name: 'Free Guy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 4, src: 'images/posters/halloween-kills.jpg', name: 'Hallowen kills', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 5, src: 'images/posters/no-time-to-die.jpg', name: 'No time to die', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 6, src: 'images/posters/shang-chi.jpg', name: 'Shang-chi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 7, src: 'images/posters/shaun-of-the-dead.jpg', name: 'Shaun of the dead', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 8, src: 'images/posters/the-addams-family-2.jpg', name: 'The addams family 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'showing'},
        {id: 9, src: 'images/posters/the-many-saints.jpg', name: 'The many saints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top'},
        {id: 10, src: 'images/posters/venom.jpg', name: 'Venom', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming'},
        {id: 11, src: 'images/posters/eternals.jpg', name: 'Eternals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming'},
        {id: 12, src: 'images/posters/the-doors.jpg', name: 'The doors', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming'},
        {id: 13, src: 'images/posters/dune.jpg', name: 'Dune', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'coming'},
        {id: 14, src: 'images/posters/dune.jpg', name: 'Dune', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top'},
        {id: 15, src: 'images/posters/eternals.jpg', name: 'Eternals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'top'}
    ];

    useEffect(() => {
        const filter = movies.filter(movie => movie.category === category);
        setListMovies(filter);
    }, [category]);


    let infiniteStatus = (listMovies.length > 3) ? true : false;
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
        <section className="bg0 p-t-45 p-b-140">
            <div className="container">
                {/* Tab01 */}
                <div className="tab01">
                    {/* Nav tabs */}
                    
                    { FilterCategoryUI() }

                    {/* Tab panes */}
                    <div className="tab-content p-t-40">
                        <div className="tab-pane fade show active">
                            {/* Slide2 */}
                            <Slider {...settings}>
                                { listMovies.map(movie => (
                                    <Movie 
                                        key={movie.id}
                                        movie={movie}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MoviesSlider;