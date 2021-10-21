import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Date from './Date';
import ButtonShowtime from './ButtonShowtime';

function SampleNextArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick4 next-slick4 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight} size="xs" /></button>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick4 prev-slick4 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft} size="xs" /></button>
    );
}

const DateModalSlider = () => {
    const settings = {
        infinite: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
        ]
    };

    const dates = [
        {id: 1, date: '2021-10-19', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 2, date: '2021-10-20', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 3, date: '2021-10-21', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 4, date: '2021-10-22', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 5, date: '2021-10-23', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 6, date: '2021-10-24', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]},
        {id: 7, date: '2021-10-25', showtimes: [{id: 1, time: '07:00 AM'},{id: 2, time: '09:00 AM'},{id: 3, time: '01:00 PM'},{id: 4, time: '05:00 PM'},]}
    ];

    const [activeDate, setActiveDate] = useState(dates[0].date);
    console.log(activeDate);

    const today = dates.filter(date => date.date === activeDate);
    console.log(today);

    const showtimes = (today.length > 0) ? today[0].showtimes : [];

    return ( 
        <>
            <Slider {...settings}>
                { dates.map(date => (
                    <Date 
                        key={date.id}
                        date={date}
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