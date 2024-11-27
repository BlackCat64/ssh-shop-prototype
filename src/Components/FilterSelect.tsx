import React, {useState} from 'react';
import PriceRangeSelector from './PriceRangeSelector'
import SortSelector from './SortSelector'

interface FilterSelectProps {
    sortType: string;
    setSortType: (value: string) => void;
    minPrice: number;
    setMinPrice: (value: number) => void;
    maxPrice: number;
    setMaxPrice: (value: number) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
                                                       sortType,
                                                       setSortType,
                                                       minPrice,
                                                       setMinPrice,
                                                       maxPrice,
                                                       setMaxPrice
                                                   }) => {
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
                            <PriceRangeSelector
                                minPrice={minPrice}
                                setMinPrice={setMinPrice}
                                maxPrice={maxPrice}
                                setMaxPrice={setMaxPrice}
                            />
                        </th>
                        <th>
                            <SortSelector sortType={sortType} setSortType={setSortType} />
                        </th>
                    </table>
                    <button className="btn btn-primary" type="submit" onClick={handleSearchClick}>Search</button>
                </div>
            </form>
        </div>
    );
}
export default FilterSelect;