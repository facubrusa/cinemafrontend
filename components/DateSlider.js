import React, { useContext } from 'react';
import Slider from "react-slick";
import MovieContext from '../context/movies/MovieContext';
import DateItem from './DateItem';
import { getDates } from '../util/helper';
import { ModalMovieSlider } from './Sliders';

const DateSlider = () => {
    const movieContext = useContext(MovieContext);
    const { dateselected, today, setDate } = movieContext;

    // Generate array of 8 days
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDate = new Date(today);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 8);
    const dates = getDates(startDate, endDate);

    return (
      <Slider {...ModalMovieSlider}>
        { dates.map((date, index) => (
            <DateItem 
                key={index}
                date={date}
                days={days}
                dateselected={dateselected}
                setDate={setDate}
            />
        ))}
      </Slider>
    );
}
 
export default DateSlider;