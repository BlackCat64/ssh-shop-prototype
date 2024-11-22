import React, { useState } from 'react';

const SortSelect: React.FC = () => {
    const sortOptions: Record<string, string> = { // store all possible sort types in a mapping object
        'alphabetical': "Name: A - Z",
        'alphabetical-reverse': "Name: Z - A",
        'price': "Price: Low to High",
        'price-reverse': "Price: High to Low",
    };

    // State to store the selected sort type
    const [sortType, setSortType] = useState<string>('alphabetical');

    const handleSortChange = (type: string) => {
        setSortType(type); // Update the sort type
        // You can add any logic here to handle the sorting of your data
        console.log("Selected Sort Type: ", type);
    };

    return (
        <div className="sortSelect">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {sortOptions[sortType]}  {/* Display the mapped sort option */}
                </button>
                <ul className="dropdown-menu">
                    {Object.keys(sortOptions).map((type) => (
                        <li key={type}>
                            <button
                                className="dropdown-item"
                                onClick={() => handleSortChange(type)}
                            >
                                {sortOptions[type]}  {/* Display the corresponding display name */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortSelect;