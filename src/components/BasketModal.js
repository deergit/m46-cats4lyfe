import { useRef } from 'react';

const BasketModal = (cat, props) => {
  const modalRef = useRef();
     const handleClick = (e) => {
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }

  const closeHandler = (e) => {
    cat.onClose();
  }



  return (
    <div>
      <h1>Added to Basket</h1>
      
      <img src={cat.url} alt={`image of ${cat.id} the cat`} draggable="false"></img>
      <h2>ID {cat.id}</h2>
      <p>{cat.price}</p>
      <button onClick={closeHandler}>Close</button>

      <h1>Total Basket</h1>
      <p></p>
      <p></p>
    </div>
  );
}

export default BasketModal;