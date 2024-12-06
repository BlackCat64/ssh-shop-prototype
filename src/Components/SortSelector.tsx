import React from 'react';

interface SortSelectorProps {
    sortType: string;
    setSortType: (value: string) => void;
}

const SortSelect: React.FC<SortSelectorProps> = ({ sortType, setSortType }) => {
    const sortOptions: Record<string, string> = { // store all possible sort types in a mapping object
        'alphabetical': "Name: A - Z",
        'alphabetical-reverse': "Name: Z - A",
        'price': "Price: Low to High",
        'price-reverse': "Price: High to Low",
    };

    const handleSortChange = (type: string) => {
        setSortType(type);
    };

    return (
        <div className="sortSelect">
            <div className="optionTitle">
                <label>Sort</label>
            </div>

            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {sortOptions[sortType]}
                </button>
                <ul className="dropdown-menu">
                    {Object.keys(sortOptions).map((type) => (
                        <li key={type}>
                            <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSortChange(type)}
                            >
                                {sortOptions[type]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortSelect;