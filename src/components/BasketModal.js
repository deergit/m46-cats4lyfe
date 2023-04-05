import { useRef } from 'react';

const BasketModal = (props) => {
  const modalRef = useRef();

  const closeHandler = (e) => {
    props.onClose();
  }

  return (
    <div>
      <h1>Added to Basket</h1>
      {/* awaiting actuals */}
      {/* <img src={``} alt={`image of ${props.selectedCat.name} the cat`} draggable="false"></img> */}
      <h2>{'props.selectedCat.name'}</h2>
      <p>{'props.selectedCat.price'}</p>
      <button onClick={closeHandler}>Close</button>
    </div>
  );
}

export default BasketModal;