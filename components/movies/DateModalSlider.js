import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import DateItem from './DateItem';
import MovieContext from '../../context/movies/MovieContext';
import { MoviesSlider } from '../Sliders';
import { getDates } from '../../util/helper';

const DateModalSlider = () => {
    const movieContext = useContext(MovieContext);
    const { modaldateselected, movieselected, today, moviesessions, setModalDate, getMovieSessions } = movieContext;

    useEffect(() => {
        getMovieSessions(modaldateselected, movieselected);
    }, [modaldateselected]);

    const showtimes = moviesessions.filter(session => session.date === modaldateselected);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDate = new Date(today);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 8);
    const dates = getDates(startDate, endDate);

    return (    
        <>
            <Slider {...MoviesSlider}>
                { dates.map((date, index) => (
                    <DateItem 
                        key={index}
                        date={date}
                        days={days}
                        modaldateselected={modaldateselected}
                        setModalDate={setModalDate}
                    />
                ))}
            </Slider>

            { showtimes.length > 0 ? (
                <div className="d-flex justify-content-center">
                    <div className="flex-w flex-sb-m py-2 list-showtime">
                        { showtimes.map((showtime, index) => (
                            <button
                                key={index}
                                className="mtext-101 cl0 bg1 bor1 size-104 hov-btn1 trans-04"
                            >{showtime.time.substr(0, 5)}</button>
                        ))}
                    </div>
                </div>
                    
            ) : <h6 className="mtext-112 cl2 text-center mt-3">There's no showtimes :c</h6> }

            
        </>
    );
}
 
export default DateModalSlider;