import { useRef } from 'react';

const BasketModal = (props) => {
  const modalRef = useRef();

  const closeHandler = (e) => {
    props.onClose();
  }


  return (
    <div ref={modalRef}>
      <h1>Added to Basket</h1>
      
      {props.basketItems.map((item) => {
        return (
          <div>
            <img src={item.url} alt={`${item.id} the cat`} draggable="false"></img>
            <h2>ID {item.id}</h2>
            <p>{item.price}</p>
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