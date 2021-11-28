import './style.scss';
import React, { useState, useEffect } from 'react';

function ProductFilters() {
  const filters = [
    { name: 'Category', open: false },
    { name: 'Pattern', open: false },
    { name: 'Figure', open: false },
    { name: 'Color', open: false },
    { name: 'Type', open: false },
  ];

  /**
   * TODO
   * change open in object to lists of filters
   * (like, for color: [brown, black, white])
   * and add then map in filtersSelectList
   */

  const [selectedFilter, setSelectedFilter] = useState({});

  const handleListShow = (newFilter) => {
    console.log(newFilter);
    console.log(selectedFilter);
    console.log(newFilter.name === selectedFilter.name);
    if (
      Object.keys(selectedFilter).length === 0 ||
      newFilter.name !== selectedFilter.name
    )
      setSelectedFilter(newFilter);
    else setSelectedFilter({});
  };

  useEffect(() => {}, [filters]);

  return (
    <section className="productFilters">
      {filters.map((filter) => (
        <div className="filter" key={filter.name}>
          {filter.name}
          <div className="filtersSelect">
            <button
              type="button"
              onClick={() => handleListShow(filter)}
              className="filtersSelectButton"
            >
              <span>{filter.name} (select)</span>
              <i className="icon-down-open" />
            </button>
            {selectedFilter.name === filter.name && (
              <ul className="filtersSelectList">
                <li className="filtersSelectItem">1</li>
                <li className="filtersSelectItem">2</li>
                <li className="filtersSelectItem">3</li>
              </ul>
            )}
          </div>
        </div>
      ))}
      Price from:
      <input
        className="priceInput"
        type="number"
        step="1"
        min="0"
        max="10000"
      />
      to:
      <input
        className="priceInput"
        type="number"
        step="1"
        min="0"
        max="10000"
      />
    </section>
  );
}

export default ProductFilters;
