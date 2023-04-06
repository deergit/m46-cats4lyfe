import React, { useState, useRef } from 'react';
import BasketModal from '../components/BasketModal';

const Basket = (props) => {
  const modalRef = useRef();
  

const closeHandler = (e) => {
 props.onClose();
}
  
  const [showBasket, setShowBasket] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  const onAdd = (item) => {
    const exist = basketItems.find((x) => x.id === item.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = (item) => {
    const exist = basketItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== item.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <div>
      <h2>Your Basket:</h2>
      <div>
        {props.basketItems.length === 0 && <div>basket is empty</div>}
        {props.basketItems.map((item) => {
          <div key={`${item.id}`}>
            <img className="thumbnail" src={`${item.url}`} alt={`cat`} draggable="false"></img>
            <p>{`${item.breed}`}</p>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>{' '}
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        })}


        {basketItems.length !== 0 && (
          <div>


            <p>Items Price</p>
            <p>${itemsPrice.toFixed(2)}</p>

            <p>Shipping Price</p>
            <p> ${shippingPrice.toFixed(2)}</p>

            <p>Total Price</p>
            <p>${totalPrice.toFixed(2)}</p>



            <button onClick={() => alert('Implement Checkout!')}>
              Checkout
            </button>
          </div>

        )}


        {showBasket && <BasketModal basketItems={basketItems} setShowBasket={setShowBasket} />}
      </div>
    </div>
  );
}

export default Basket;