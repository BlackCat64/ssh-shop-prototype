import React from 'react';
import PriceRangeSelector from './PriceRangeSelector'

function FilterSelect() {
    return (
        <div className="filterSelect">
            <label className="title">Filters</label>
            <br></br>
            <PriceRangeSelector/>
        </div>
    );
}
export default FilterSelect;