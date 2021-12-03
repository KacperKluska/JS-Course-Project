import './style.scss';
import React, { useState, useEffect } from 'react';
import { getAllProductsFilters } from '../../services/requests';

function ProductFilters() {
  const [selectedFilter, setSelectedFilter] = useState({});
  const [loading, setLoading] = useState(true);
  const [filtersArrays, setFiltersArrays] = useState([]);

  const [filtersValues, setFiltersValues] = useState({
    pattern: null,
    color: null,
    figure: null,
    type: null,
    category: null,
  });

  const filters = [
    { name: 'Pattern' },
    { name: 'Color' },
    { name: 'Figure' },
    { name: 'Type' },
    { name: 'Category' },
  ];

  const handleFilterValue = (key, newValue) => {
    setFiltersValues((prev) => ({ ...prev, [key.toLowerCase()]: newValue }));
  };

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
    if (response.status === 200) setFiltersArrays(response.data);
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
                  {Object.entries(filtersValues)[index][1] === null
                    ? '(select)'
                    : Object.entries(filtersValues)[index][1]}
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
                  {filtersArrays.length !== 0
                    ? filtersArrays[index].array.map((item) => (
                        <button
                          type="button"
                          onClick={() => {
                            handleFilterValue(filter.name, item.value);
                            handleListShow(filter);
                          }}
                          key={item.id}
                          className="filtersSelectItem"
                        >
                          {item.value}
                        </button>
                      ))
                    : null}
                </ul>
              )}
            </div>
          </div>
        ))}
      <div>
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
      </div>
    </section>
  );
}

export default ProductFilters;
