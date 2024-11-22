import React, { useState } from 'react';

const SortSelect: React.FC = () => {
    // State to store the selected sort type
    const [sortType, setSortType] = useState('');

    const handleSortChange = (type: string) => {
        setSortType(type); // Update the sort type
        // You can add any logic here to handle the sorting of your data
        console.log("Selected Sort Type: ", type);
    };

    return (
        <div className="sortSelect">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => handleSortChange("alphabetical")}>
                        Name: A - Z
                    </button></li>
                    <li><button className="dropdown-item" onClick={() => handleSortChange("alphabetical-reverse")}>
                        Name: Z - A
                    </button></li>
                    <li><button className="dropdown-item" onClick={() => handleSortChange("price")}>
                        Price: Low to High
                    </button></li>
                    <li><button className="dropdown-item" onClick={() => handleSortChange("price-reverse")}>
                        Price: High to Low
                    </button></li>
                </ul>
            </div>
        </div>
    );
};

export default SortSelect;