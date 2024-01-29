import { Link } from 'react-router-dom';
import PriceRange from '../PriceRange';
import './style.css';

const CategoryPage = ({ categories, setProducts, cloneProducts, products, filteredProducts, setFilteredProducts}) => {
  const filterFunc = (event) => {
    setProducts(cloneProducts.filter((el) => el.category === event.target.innerHTML));
  };
  return (
    <div className="Categories">
      <h2>Categories</h2>
      {categories.length &&
        categories.map((category, index) => {
          return (
            <div className="Category" key={index}>
              <ul onClick={filterFunc}>
                <li>{category}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};
export default CategoryPage;




