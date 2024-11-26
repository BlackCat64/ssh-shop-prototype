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
            <button
                type="button"
                className={`filtersDropdown btn btn-primary dropdown-toggle ${dropdownOpen ? "open" : ""}`}
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"  // Disable auto-close behavior for the dropdown
                aria-expanded={dropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}  // Toggle dropdown open/close
            >
                Filters
            </button>

            <form className={`filtersMenu dropdown-menu p-4 ${dropdownOpen ? "show" : ""}`}>
                <div className="filterSelect">
                    <table className="filterOptionsLayout">
                        <th>
                            <PriceRangeSelector/>
                        </th>
                        <th>
                            <SortSelector/>
                        </th>
                    </table>
                    <button className="btn btn-primary" type="submit" onClick={handleSearchClick}>Search</button>
                </div>
            </form>
        </div>
    );
}
export default FilterSelect;