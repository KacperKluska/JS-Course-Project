import './style.scss';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../../services/requests';
import ProductFilters from '../../ProductFilters/ProductFilters';

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    setLoading(true);
    setProducts(await getAllProducts());
    setLoading(false);
  }, []);

  /**
   * TODO
   * check if products is an empty array
   * if so print "Couldn't find proper products"
   * correct line 30 and 35
   */

  return (
    <article className="emptyScreen">
      <ProductFilters />
      <section className="products">
        {loading && <div>Loading...</div>}
        {!loading && (
          <header className="productsHeader">
            {products.data[0].category}
          </header>
        )}
        {!loading && (
          <section className="productsList">
            {products.data.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="productCard" key={`${product.name}_${index}`}>
                <div className="productCardImage">img here</div>
                <div className="productCardDescription">
                  <h3>{product.name}</h3>
                  {product.price} $
                </div>
                <div className="productCardButton">
                  <button type="button">Show more</button>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>
    </article>
  );
}

export default ProductsPage;
