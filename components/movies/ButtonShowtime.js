import React from 'react';

const ButtonShowtime = ({showtime}) => {
    let { time } = showtime;
    return ( 
        <button
            className="flex-c-m mtext-101 cl0 size-126 bg1 bor1 hov-btn1 p-lr-15 trans-04 mr-3 mt-3"
        >{time}</button>
    );
}
 
export default ButtonShowtime;