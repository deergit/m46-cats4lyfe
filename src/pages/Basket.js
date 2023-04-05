import React, { useState } from 'react';
import BasketModal from '../components/BasketModal';

const Basket = (props) => {
  const { selectedCat } = props;
  const [showModal, setShowModal] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (selectedCat) => {
    setBasketItems([...basketItems, selectedCat]);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Selected Products:</h2>
      <ul>
        {selectedCat.map((selectedCat) => (
          <li key='{props.selectedCat.id}'>
            {/* <img src={image} alt={name} /> */}
            <p>{props.selectedCat.name}</p>
            <p>{props.selectedCat.price}</p>
            <button onClick={() => handleAddToBasket(selectedCat)}>Add to Basket</button>
          </li>
        ))}
      </ul>
      {showModal && <BasketModal basketItems={basketItems} setShowModal={setShowModal} />}
    </div>
  );
}

export default Basket;