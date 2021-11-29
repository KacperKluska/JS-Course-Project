/* eslint-disable prefer-destructuring */
import './style.scss';
import React, { useState, useEffect } from 'react';
import { getAllProductsFilters } from '../../services/requests';

function ProductFilters() {
  const [selectedFilter, setSelectedFilter] = useState({});
  const [loading, setLoading] = useState(true);
  const [filtersArrays, setFiltersArrays] = useState([]);

  const filters = [
    { name: 'Pattern' },
    { name: 'Color' },
    { name: 'Figure' },
    { name: 'Type' },
    { name: 'Category' },
  ];

  // , setChoseValues

  const [choseValues] = useState([
    { name: null },
    { name: null },
    { name: null },
    { name: null },
    { name: null },
  ]);

  const handleListShow = (newFilter) => {
    if (
      Object.keys(selectedFilter).length === 0 ||
      newFilter.name !== selectedFilter.name
    )
      setSelectedFilter(newFilter);
    else setSelectedFilter({});
  };

  useEffect(async () => {
    const response = await getAllProductsFilters();
    setFiltersArrays(response.data);
    setLoading(false);
  }, []);

  return (
    <section className="productFilters">
      {loading && <span>Loading...</span>}
      {!loading &&
        filters.map((filter, index) => (
          <div className="filter" key={filter.name}>
            {filter.name}
            <div className="filtersSelect">
              <button
                type="button"
                onClick={() => handleListShow(filter)}
                className="filtersSelectButton"
              >
                <span>
                  {filter.name}:{' '}
                  {choseValues[index].name === null
                    ? '(select)'
                    : choseValues[index].name}
                </span>
                <i
                  className={`${
                    selectedFilter.name === filter.name
                      ? 'icon-up-open'
                      : 'icon-down-open'
                  }`}
                />
              </button>
              {selectedFilter.name === filter.name && (
                <ul className="filtersSelectList">
                  {filtersArrays[index].array.map((item) => (
                    <button
                      type="button"
                      onClick={() => {
                        console.log(item.value);
                        handleListShow(filter);
                      }}
                      key={item.id}
                      className="filtersSelectItem"
                    >
                      {item.value}
                    </button>
                  ))}
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
