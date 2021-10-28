import React, { useState } from 'react';

const DateItem = ({date, days, currentDay, setDate}) => {

    const d = new Date(date);
    const monthName = d.toLocaleString('en-US', { month: 'long' });
    const month = String(d.getMonth()).padStart(2, '0');
    const dayMonth = String(d.getDate()).padStart(2, '0');
    const dayWeek = d.getDay();
    const year = d.getFullYear();
    const dayName = days[dayWeek];

    return ( 
        <div>
            <div 
                className={`slick-title ${currentDay == dayMonth && 'date-active'}`} 
                onClick={() => setDate(`${year}-${month}-${dayMonth}`)}
            >
                <span>{dayName}</span>
                <span>{dayMonth}</span>
                <span>{monthName}</span>				
                {currentDay == dayMonth && <div className="slick-underline"></div>}
            </div>
        </div>
    );
}
 
export default DateItem;