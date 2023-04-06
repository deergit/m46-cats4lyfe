import { useRef } from 'react';

const BasketModal = (image) => {
  const modalRef = useRef();

  const closeHandler = (e) => {
    image.onClose();
  }

  

  return (
    <div>
      <h1>Added to Basket</h1>
      awaiting actuals
      <img src={image.url} alt={`image of ${image.id} the cat`} draggable="false"></img>
      <h2>ID {image.id}</h2>
      <p>{'props.selectedCat.price'}</p>
      <button onClick={closeHandler}>Close</button>

      <h1>Total Basket</h1>
      <p></p>
      <p></p>
    </div>
  );
}

export default BasketModal;