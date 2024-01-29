import { Link } from 'react-router-dom';
import { useState } from 'react';
import CategoryPage from '../CategoryPage';

import './style.css';

const ProductsPage = ({ products, addToCart, categories, setProducts, cloneProducts, rangValue }) => {
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  const updateFilteredProducts = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="ProductsPage">
      <CategoryPage 
        categories={categories} 
        products={products} 
        setProducts={setProducts} 
        cloneProducts={cloneProducts}
        rangValue={rangValue}
        filteredProducts={filteredProducts}
      />
      <div className="Products">
        {products.map((product) => {
          return (
            <div className="Product" key={product?.id}>
              <img src={product.image} alt="image" className="img" />
              <h2 className="title">{product?.title}</h2>
              <h3 className="description">
                {product?.description.slice(0, 30)}
              </h3>
              <h3 className="price">$ {product?.price}</h3>
              <Link>
                <button className="buy" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </Link>
              <h2 className="id">{product?.id}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;



