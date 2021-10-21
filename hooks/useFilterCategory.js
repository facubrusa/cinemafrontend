import React, { useState } from 'react';

const UseFilterCategory = () => {

    // Save the selected category here
    const [category, setCategory] = useState('showing');

    const FilterCategoryUI = () => (
        <ul className="nav nav-tabs">
            <li className="nav-item p-b-10">
                <a 
                    className={ category === 'top' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setCategory('top')}
                >Top 10</a>
            </li>

            <li className="nav-item p-b-10">
                <a 
                    className={ category === 'showing' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setCategory('showing')}
                >Now Showing</a>
            </li>

            <li className="nav-item p-b-10">
                <a 
                    className={ category === 'coming' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setCategory('coming')}
                >Coming Soon</a>
            </li>
        </ul>
    )

    return {
        category,
        FilterCategoryUI
    }
}
 
export default UseFilterCategory;