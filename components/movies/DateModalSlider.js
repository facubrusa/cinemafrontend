import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import DateItem from './DateItem';
import ButtonShowtime from './ButtonShowtime';
import MovieContext from '../../context/movies/MovieContext';
import { MoviesSlider } from '../Sliders';
import { getDates } from '../../util/helper';

const DateModalSlider = () => {
    const movieContext = useContext(MovieContext);
    const { sessions, modaldateselected, movieselected, today, setModalDate } = movieContext;

    const [showtimes, setShowtimes] = useState([]);
    useEffect(() => {
        if(sessions) {
            const movieSessions = sessions.filter(session => session.idMovie === movieselected);
            const listShowtimes = movieSessions.filter(session => session.date === modaldateselected);
            setShowtimes(listShowtimes);
        }
    }, [modaldateselected]);

    // console.log(dates);
    // console.log(showtimes);
    
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
                <div className="flex-w flex-sb-m p-b-10">
                    <div className="flex-w flex-m justify-content-center">
                        { showtimes.map(showtime => (
                            <ButtonShowtime 
                                key={showtime.idSession}
                                showtime={showtime}
                            />
                        ))}
                    </div>
                </div>
            ) : null }

            
        </>
    );
}
 
export default DateModalSlider;