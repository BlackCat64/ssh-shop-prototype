import React from 'react';
import PriceRangeSelector from './PriceRangeSelector'
import SortSelector from './SortSelector'

function FilterSelect() {
    return (
        <div className="filterSelect">
            <label className="title">Filters</label>
            <br></br>
            <PriceRangeSelector/>
            <SortSelector/>
        </div>
    );
}
export default FilterSelect;