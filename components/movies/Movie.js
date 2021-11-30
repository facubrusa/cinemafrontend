import React, { useState, useContext } from 'react';
import MovieModal from './MovieModal';
import Link from 'next/link';
import MovieContext from '../../context/movies/MovieContext';

const Movie = ({movie, sessions, selectMovie}) => {
    const movieContext = useContext(MovieContext);
    const { dateselected, setModalDate, clearModalDate } = movieContext;

    const [showModal, setShowModal] = useState(false);
    let { idMovie, name, src, duration, classification } = movie;
    if(!src) src = 'images/posters/the-addams-family-2.jpg';

    const closeModal = (e, show) => {
        e.preventDefault();
        (show) ? setModalDate(dateselected) : clearModalDate();
        setShowModal(show);   
    }

    const movieSessions = sessions.filter(session => session.idMovie === idMovie);
    const listShowtimes = movieSessions.filter(session => session.date === dateselected);

    return ( 
        <>
        <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
            <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={src} alt={`${name}-IMG-POSTER`} />

                    <a 
                        href="#" 
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn3 p-lr-15 trans-04 js-show-modal1"
                        onClick={(e) => {
                            selectMovie(idMovie);
                            closeModal(e, true);
                        }}
                    >Quick View</a>
                </div>

                <div className="p-t-14">
                    <div className="flex-col-l ">
                        <Link href={`/movie-detail/${idMovie}`}>
                            <a className="mtext-114 cl2 hov-cl1 trans-04 p-b-6">{name}</a>
                        </Link>
                        <p className="mtext-115 cl3">
                            {`${classification} | ${duration} MIN`}
                        </p>
                        { listShowtimes.length > 0 ? (
                            <div className="d-flex justify-content-center">
                                <div className="flex-w flex-sb-m py-2 list-showtime">
                                    {listShowtimes.map((showtime, index) => (
                                        <Link
                                            href={`https://v2-0.cinexo.com.ar/Comprar.php?fid=${showtime.idSession}&cid=122200`}
                                            key={index}
                                        >
                                            <button
                                                className="mtext-101 cl0 bg1 bor1 size-104 hov-btn1 trans-04">{showtime.time.substr(0, 5)}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null }
                        
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