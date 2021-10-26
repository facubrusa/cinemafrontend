import React, { useState } from 'react';

const DateItem = ({days, date}) => {
    const [activeDate, setActiveDate] = useState(null);

    const today = new Date().getDate();
    const d = new Date(date.date);
    const month = d.toLocaleString('en-US', { month: 'long' });
    const dayMonth = String(d.getDate()).padStart(2, '0');
    const dayWeek = d.getDay();
    const dayName = days[dayWeek];
    if(today == dayMonth) setActiveDate(today)
    

    const selectDay = dayMonth => {
        // setActiveDate(dayMonth);
    }

    return ( 
        <div>
            <div 
                className={`slick-title ${activeDate === dayMonth && 'date-active'}`} 
                onClick={() => selectDay(dayMonth)}
            >
                <span>{dayName}</span>
                <span>{dayMonth}</span>
                <span>{month}</span>				
                {activeDate === dayMonth && <div className="slick-underline"></div>}
            </div>
        </div>
    );
}
 
export default DateItem;