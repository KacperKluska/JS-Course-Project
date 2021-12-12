import './style.scss';

function ProductsList({ products }) {
  return (
    <section className="products">
      <header className="productsHeader">{products[0].category}</header>
      <section className="productsList">
        {products.map((product, index) => (
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
      )
    </section>
  );
}

export default ProductsList;
