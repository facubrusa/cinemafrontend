import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DateItem from './DateItem';
import ButtonShowtime from './ButtonShowtime';
import MovieContext from '../../context/movies/MovieContext';
import { SettingsModalSlider } from '../Sliders';

const DateModalSlider = () => {
    const movieContext = useContext(MovieContext);
    const { sessions, dateselected, movieselected, setDate } = movieContext;

    const [dates, setDates] = useState([]);
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        if(sessions) {
            const movieSessions = sessions.filter(session => session.movieId === movieselected);
            const listDates = [... new Set(movieSessions.map(session => session.date))];
            const listShowtimes = movieSessions.filter(session => session.date === dateselected);
            setDates(listDates);
            setShowtimes(listShowtimes);
        }
    }, [sessions, dateselected]);

    console.log(dates);
    // console.log(showtimes);
    if(dates.length === 0) return (
        <h4>No showtimes</h4>
    );
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (    
        <>
            <Slider {...SettingsModalSlider}>
                { dates.map(date => (
                    <DateItem 
                        key={date}
                        date={date}
                        days={days}
                        dateselected={dateselected}
                        setDate={setDate}
                    />
                ))}
            </Slider>

            { showtimes.length > 0 ? (
                <div className="flex-w flex-sb-m p-b-10">
                    <div className="flex-w flex-m justify-content-center">
                        { showtimes.map(showtime => (
                            <ButtonShowtime 
                                key={showtime.id}
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