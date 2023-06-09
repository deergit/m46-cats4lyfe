import React, { useState, useRef } from 'react';
import BasketModal from '../components/BasketModal';
import './Basket.css';

const Basket = ({ onClose, basketItems, setBasketItems }) => {
  const [totalPrice, setTotalPrice] = useState(
    basketItems.reduce(
      (acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, '')),
      0
    )
  );
  const modalRef = useRef();

  const handleRemoveItem = (itemId) => {
    const updatedBasket = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedBasket);
    setTotalPrice(
      updatedBasket.reduce(
        (acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, '')),
        0
      )
    );
  };

  const handleClearAll = () => {
    setBasketItems([]);
    setTotalPrice(0);
  };


  return (
    <div className="basket" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img className='cart-logo' src="./images/catcart2white.png" alt="cat with cart" />
        
        <ul>
         
        {basketItems.map((item) => (
  <li className='basketItems' key={item.id}>
    <img className="thumbnail" src={`${item.url}`} alt={`cat`} draggable="false"></img> - {item.name} - {item.price} 
    <button className="basketButtons" onClick={() => handleRemoveItem(item.id)}>Remove</button>
  </li>
  
))}
        </ul>
        <h1>Total price: £{totalPrice}</h1>
        <button className="basketButtons" onClick={() => alert('Forwarding to Checkout!')}>
          Checkout
        </button>
        <button className="basketButtons" onClick={handleClearAll}>
          Clear All
        </button>
        <button className="basketButtons" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default Basket;
