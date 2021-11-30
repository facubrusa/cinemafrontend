import React, { useContext, useEffect, useRef } from 'react';
import clientAxios from '../../config/axios';
import Layout from '../../components/Layout';
import MovieContext from '../../context/movies/MovieContext';
import styled from '@emotion/styled';
import Slider from "react-slick";
import DateItem from '../../components/movies/DateItem';
import { DetailDateSlider } from '../../components/Sliders';
import { getDates } from '../../util/helper';
import Link from 'next/link';

const SectionImage = styled.section`
    background-image: url('/images/posters/the-addams-family-2.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: calc(100vh - 400px);
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 92px;
    padding-top: 92px;
`;

export async function getServerSideProps({params}) {
    let idMovie = params['movie-detail'];

    try {
        const response = await clientAxios.get(`/api/movies/${idMovie}`);

        return {
            props: {
                movie: response.data
            }
        }
    } catch (error) {
        console.log(error.response);
    }
}

const MovieDetail = ({movie}) => {

    const movieContext = useContext(MovieContext);
    const { modaldateselected, today, moviesessions, setModalDate, getMovieSessions } = movieContext;

    const { idMovie, name, description, directors, cast, classification, duration } = movie[0];

    useEffect(() => {
        getMovieSessions(modaldateselected, idMovie);
    }, [modaldateselected]);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDate = new Date(today);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 7);
    const dates = getDates(startDate, endDate);

    const sliderRef = useRef();

    const handleSlider = index => {
        sliderRef.current.slickGoTo(index);
    };



    return ( 
        <Layout>

            <SectionImage />

            <section className="bg0 p-t-75 p-b-120">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-3 m-lr-auto p-b-30" id="movie-poster">
                            <div className="how-bor2">
                                <div className="hov-img0">
                                    <img src="/images/posters/the-addams-family-2.jpg" alt="IMG" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-5 p-b-30">
                            <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                                <h3 className="ltext-107 cl2 p-b-16 text-center">
                                    {name}
                                </h3>

                                <div>
                                    <p className="mtext-102 cl5">
                                        Description
                                    </p>
                                    <p className="stext-113 cl2 p-b-26">
                                        {description}
                                    </p>
                                </div>
                                
                                <div>
                                    <p className="mtext-102 cl5">
                                        Directed by
                                    </p>
                                    <p className="stext-113 cl2 p-b-26">
                                        {directors}
                                    </p>
                                </div>

                                <div>
                                    <p className="mtext-102 cl5">
                                        Cast
                                    </p>
                                    <p className="stext-113 cl2 p-b-26">
                                        {cast}
                                    </p>
                                </div>

                                <div>
                                    <p className="mtext-102 cl5">
                                        Classification
                                    </p>
                                    <p className="stext-113 cl2 p-b-26">
                                        {classification}
                                    </p>
                                </div>
                                
                                <div>
                                    <p className="mtext-102 cl5">
                                        Duration
                                    </p>
                                    <p className="stext-113 cl2 p-b-26">
                                        {`${duration} Min`}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 p-b-30 justify-content-center">
                            <div className="p-t-7 p-l-35 p-l-15-lg p-l-0-md">
                                <h6 className="mtext-112 cl2 p-b-16 text-center">
                                    Select Day
                                </h6>
                                <Slider {...DetailDateSlider} ref={sliderRef}>
                                    { dates.map((date, index) => (
                                        <DateItem 
                                            key={index}
                                            index={index}
                                            date={date}
                                            days={days}
                                            modaldateselected={modaldateselected}
                                            setModalDate={setModalDate}
                                            handleSlider={handleSlider}
                                        />
                                    ))}
                                </Slider>
                            </div>

                        { moviesessions.length > 0 ? (
                            <div className="d-flex justify-content-center">
                                <div className="flex-w flex-sb-m py-2 list-showtime">
                                { moviesessions.map((showtime, index) => (
                                    <Link 
                                        href={`https://v2-0.cinexo.com.ar/Comprar.php?fid=${showtime.idSession}&cid=122200`}
                                        target="_blank" rel="noopener noreferrer"
                                        key={index}
                                        passHref
                                    >        
                                        <button
                                            target="_blank" rel="noreferrer"
                                            className="mtext-101 cl0 bg1 bor1 size-104 hov-btn1 trans-04"
                                        >{showtime.time.substr(0, 5)}</button>
                                    </Link>

                                ))}
                                </div>
                            </div>
                        ) : <h6 className="mtext-112 cl2 text-center mt-3">There're no showtimes :c</h6> }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
      );
}
 
export default MovieDetail;