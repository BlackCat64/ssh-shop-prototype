import React from 'react';

interface PriceRangeSelectorProps {
    minPrice: number;
    setMinPrice: (value: number) => void;
    maxPrice: number;
    setMaxPrice: (value: number) => void;
}

const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({
                                          minPrice,
                                          setMinPrice,
                                          maxPrice,
                                          setMaxPrice
                                      }) => {

    // Handlers to update state and enforce constraints
    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (value < maxPrice) {
            setMinPrice(value);
        } else {
            setMinPrice(maxPrice - 5); // Prevent overlap
        }
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (value > minPrice) {
            setMaxPrice(value);
        } else {
            setMaxPrice(minPrice + 5); // Prevent overlap
        }
    };

    return (
        <div className="priceRange">
            <div className="optionTitle">
                <label>Price Range</label>
            </div>

            <table>
                <tr>
                    <td>
                    <label htmlFor="minPrice">Min:</label>
                    </td>
                    <td>
                    <input
                        className="priceInput"
                        type="number"
                        id="minPrice"
                        value={minPrice}
                        min="0"
                        max="500"
                        step="5"
                        onChange={handleMinPriceChange}
                    />
                    </td>
                </tr>

                <tr>
                    <td>
                    <label htmlFor="maxPrice">Max:</label>
                    </td>
                    <td>
                    <input
                        className="priceInput"
                        type="number"
                        id="maxPrice"
                        value={maxPrice}
                        min="0"
                        max="500"
                        step="5"
                        onChange={handleMaxPriceChange}
                    />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default PriceRangeSelector;