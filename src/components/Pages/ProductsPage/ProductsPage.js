import './style.scss';
import React, { useState, useEffect } from 'react';
import {
  getAllProducts,
  getAllProductsFilters,
} from '../../../services/requests';
import ProductFilters from '../../ProductFilters/ProductFilters';
import ProductsList from '../../ProductsList/ProductsList';
import LoadingPage from '../LoadingPage/LoadingPage';

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filtersArrays, setFiltersArrays] = useState([]);
  const [filtersValues, setFiltersValues] = useState({
    pattern: null,
    color: null,
    figure: null,
    type: null,
    category: null,
  });

  useEffect(async () => {
    setLoading(true);
    const productsResponse = await getAllProducts();
    const filtersResponse = await getAllProductsFilters();
    if (filtersResponse.status === 200) setFiltersArrays(filtersResponse.data);
    if (productsResponse.status === 200) {
      setProducts(productsResponse.data);
      setLoading(false);
    }
  }, []);

  return (
    <article className="emptyScreen">
      {loading && <LoadingPage />}
      {!loading && (
        <ProductFilters
          filtersArrays={filtersArrays}
          filtersValues={filtersValues}
          setFiltersValues={setFiltersValues}
        />
      )}
      {!loading && <ProductsList products={products} />}
    </article>
  );
}

export default ProductsPage;
