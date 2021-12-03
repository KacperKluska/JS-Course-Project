import './style.scss';
import { useState } from 'react';
import { filters, handleListShow, handleFilterValue } from './logic';

function ProductFilters({ filtersArrays, filtersValues, setFiltersValues }) {
  const [selectedFilter, setSelectedFilter] = useState({});

  return (
    <section className="productFilters">
      {filters.map((filter, index) => (
        <div className="filter" key={filter.name}>
          {filter.name}
          <div className="filtersSelect">
            <button
              type="button"
              onClick={() =>
                handleListShow(setSelectedFilter, selectedFilter, filter)
              }
              className="filtersSelectButton"
            >
              <span>
                {`${filter.name}: `}
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
                          handleFilterValue(
                            setFiltersValues,
                            filter.name,
                            item.value,
                          );
                          handleListShow(
                            setSelectedFilter,
                            selectedFilter,
                            filter,
                          );
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
