import { useRef } from 'react';
import './BasketModal.css';

const BasketModal = (props) => {
  const modalRef = useRef();

  const closeHandler = (e) => {
    props.onClose();
  }


  return (
    <div ref={modalRef}className="add-modal">
      <img className='cartlogo' src="./catcartlight.png" alt="cat with cart" />
      <h1>Added to Basket</h1>
      
      {props.basketItems.map((item, index) => {
        return (
          <div key={index} className="basket-wrapper">
            <img src={item.url} alt={`${item.id} the cat`} draggable="false"></img>
            <div className="basket-info">
            <h2>ID {item.id}</h2>
            <p>{item.price}</p>
            </div>
          </div>
        )
      })}

      <button onClick={closeHandler}>Close</button>

      <h1>Total Basket</h1>
      <p></p>
      <p></p>
    </div>
  );
}

export default BasketModal;