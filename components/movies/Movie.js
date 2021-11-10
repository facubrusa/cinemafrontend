import React, { useState, useContext } from 'react';
import MovieModal from './MovieModal';
import MovieContext from '../../context/movies/MovieContext';
import Link from 'next/link';

const Movie = ({movie}) => {
    const movieContext = useContext(MovieContext);
    const { selectMovie, setToday } = movieContext;

    const [showModal, setShowModal] = useState(false);
    let { idMovie, name, src, duration, classification } = movie;
    if(!src) src = 'images/posters/the-addams-family-2.jpg';

    const closeModal = (e, show) => {
        e.preventDefault();
        setToday();
        setShowModal(show)
    }

    return ( 
        <>
        <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
            <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={src} alt={`${name}-IMG-POSTER`} />

                    <a 
                        href="#" 
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        onClick={(e) => {
                            selectMovie(idMovie);
                            closeModal(e, true);
                        }}
                    >Quick View</a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                        <Link href={`/movie-detail/${idMovie}`}>
                            <a className="mtext-114 cl2 hov-cl1 trans-04 p-b-6">{name}</a>
                        </Link>
                        <p className="stext-102 cl2">
                            {`${classification} | ${duration} MIN`}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        { showModal ? <MovieModal 
            closeModal={closeModal}
            movie={movie}
        /> : null }
        
        </>
    );
}
 
export default Movie;