import { useState, useEffect } from 'react';
import Slider from 'react-slider';
import './style.css';

function PriceRange({ cloneProducts }) {
  const [priceValue, setPriceValue] = useState([0, 2000]);

  console.log(priceValue);

  useEffect(() => {
    const filteredPrice = cloneProducts.filter((product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return price >= priceValue[0] && price <= priceValue[1];
    });
  }, []);

  const handleChange = (newRange) => {
    setPriceValue(newRange);
  };

  return (
    <div>
      <h2>Price Range: ${priceValue[0]} - ${priceValue[1]}</h2>
      <Slider className='Slider'
        min={0}
        max={2000}
        value={priceValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default PriceRange;

