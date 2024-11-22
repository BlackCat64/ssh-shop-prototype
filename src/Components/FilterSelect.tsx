import React, {useState} from 'react';
import PriceRangeSelector from './PriceRangeSelector'
import SortSelector from './SortSelector'

const FilterSelect: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // logic for when user clicks "Search" after setting filters goes here
    const handleSearchClick = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="dropdown">
            <button type="button" className="filtersDropdown btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded={dropdownOpen ? "true" : "false"}
                    onClick={toggleDropdown}>
                Filters
            </button>
            <form className="filtersMenu dropdown-menu p-4" aria-labelledby="filtersDropdown">
                <div className="filterSelect">
                    <table className="filterOptionsLayout">
                        <th>
                            <PriceRangeSelector/>
                        </th>
                        <th>
                            <SortSelector/>
                        </th>
                    </table>
                    <button className="btn btn-primary" type="button" onClick={handleSearchClick}>Search</button>
                </div>
            </form>
        </div>
    );
}
export default FilterSelect;