import React, { useEffect } from 'react';

const DateItem = ({index, date, days, modaldateselected, setModalDate, handleSlider}) => {
    const d = new Date(`${date}T12:00:00`);
    // d.toISOString() output: "2021-11-01T00:00:00.000Z"
    const year = d.getFullYear();
    const monthName = d.toLocaleString('en-US', { month: 'long' });
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const dayMonth = String(d.getDate()).padStart(2, '0');
    const dayName = days[d.getDay()];

    useEffect(() => {
        if(modaldateselected === date) handleSlider(index);
    }, []);

    return ( 
        <div>
            <div 
                className={`slick-title ${modaldateselected === date && 'date-active'}`} 
                onClick={() => setModalDate(`${year}-${month}-${dayMonth}`)}
            >
                <span>{dayName}</span>
                <span>{dayMonth}</span>
                <span>{monthName}</span>				
                {modaldateselected === date && <div className="slick-underline"></div>}
            </div>
        </div>
    );
}
 
export default DateItem;