import React, { useState, useRef } from 'react';
import BasketModal from '../components/BasketModal';

const Basket = (props) => {
  const modalRef = useRef();
  const handleClick = (e) => {
     if(modalRef.current === e.target){
         props.closeModal(false)
     }
 }

const closeHandler = (e) => {
 cat.onClose();
}
  const { cat } = props;
  const [showModal, setShowModal] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  const onAdd = (cat) => {
    const exist = basketItems.find((x) => x.id === cat.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === cat.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...cat, qty: 1 }]);
    }
  };
  const onRemove = (cat) => {
    const exist = basketItems.find((x) => x.id === cat.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== cat.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === cat.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <div>
      <h2>Your Basket:</h2>
      <div>
        {basketItems.length === 0 && <div>basket is empty</div>}
        {basketItems.map((cat) => (
          <div key={`${props.cat.id}`}>
            <img className="thumbnail" src={`${props.cat.url}`}> alt={`cat`} draggable="false"></img>
            <p>{`${props.cat.breed}`}</p>
            <button onClick={() => onRemove(cat)} className="remove">
              -
            </button>{' '}
            <button onClick={() => onAdd(cat)} className="add">
              +
            </button>


            <div>
              {cat.qty} x ${cat}.price.toFixed(2)}
            </div>
          </div>
        ))}

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


        {showModal && <BasketModal basketItems={basketItems} setShowModal={setShowModal} />}
      </div>
    </div>
  );
}

export default Basket;