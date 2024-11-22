import React from 'react';
import PriceRangeSelector from './PriceRangeSelector'
import SortSelector from './SortSelector'

function FilterSelect() {
    return (
        <div className="filterSelect">
            <div className="title">
                <label>Filters</label>
            </div>
            <br></br>
            <PriceRangeSelector/>
            <SortSelector/>
        </div>
    );
}
export default FilterSelect;