import './style.scss';
import React, { useState, useEffect } from 'react';
import {
  getAllProducts,
  getAllProductsFilters,
} from '../../../services/requests';
import ProductFilters from '../../ProductFilters/ProductFilters';
import ProductsList from '../../ProductsList/ProductsList';

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filtersArrays, setFiltersArrays] = useState([]);

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
      {!loading && <ProductFilters filtersArrays={filtersArrays} />}
      {!loading && <ProductsList products={products} />}
    </article>
  );
}

export default ProductsPage;
