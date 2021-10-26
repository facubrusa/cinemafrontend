import React, { useState } from 'react';
import MovieModal from './MovieModal';

const Movie = ({movie, sessions}) => {
    const [showModal, setShowModal] = useState(false);
    // console.log(movie);
    let { id, name, src, duration, classification } = movie;
    let filter = sessions.filter(session => session.movieId === id);
    console.log(filter);
    
    return ( 
        <>
        <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
            <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={src} alt={`${name}-IMG-POSTER`} />

                    <a 
                        href="#" 
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >Quick View</a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="movie-detail.html" className="mtext-114 cl2 hov-cl1 trans-04 p-b-6">
                            {name}
                        </a>
                        <p className="stext-102 cl2">
                            {`${classification} | ${duration} MIN`}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        { showModal ? <MovieModal 
            setShowModal={setShowModal}
            movie={movie}
        /> : null }
        
        </>
    );
}
 
export default Movie;