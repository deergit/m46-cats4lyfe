import React, { useState } from 'react';
import BasketModal from '../components/BasketModal';

const Basket = (props) => {
  const { catData } = props;
  const [showModal, setShowModal] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  const onAdd = (catData) => {
    const exist = basketItems.find((x) => x.id === catData.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === catData.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...catData, qty: 1 }]);
    }
  };
  const onRemove = (catData) => {
    const exist = basketItems.find((x) => x.id === catData.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== catData.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === catData.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <div>
      <h2>Your Basket:</h2>
      <div>
        {basketItems.length === 0 && <div>basket is empty</div>}
        {basketItems.map((catData) => (
          <div key='{props.catData.id}'>
            <img className="thumbnail" src={image.url} alt={`image of ${image.id} the cat`} draggable="false"></img>
            <p>{props.catData.name}</p>
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