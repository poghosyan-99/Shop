import './style.css';

const CartPage = ({ cart, plus, minus, deleteCartItem }) => {
  
  return (
    <div className="CartPage">
      {cart?.map((el) => {
        return (
          <div className="Productt" key={el?.id}>
            <img src={el?.image} alt="img" className='img' />
            <div className='info'>
              <h2 className='title'>{el?.title}</h2>
              <h3 className='price'>$ {el?.allPrice}</h3>
              <h3 className='description'>{el?.description.slice(0, 30)}</h3>
              <div className="plus-minus">
                <i className="fa-solid fa-minus" onClick={() => minus(el.id)}></i>
                <span>{el.count}</span>
                <i className="fa-solid fa-plus" onClick={() => plus(el.id)}></i>
              </div>
              <i className="fa-solid fa-trash"  onClick={() => deleteCartItem(el.id)}></i>
            </div>
          </div>
        )
      })}
      <p className='total'>Total Price: 
        ${cart.reduce((index, product) => index + product.allPrice, 0)}
      </p>
    </div>
  );
};

export default CartPage;
