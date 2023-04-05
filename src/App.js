import './App.css';
import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BasketModal from './components/BasketModal';
// import Basket from './pages/Basket'

function App() {
    const [showModal, setShowModal] = useState(false);
  
    const handleAddToBasket = () => {
      // Add logic for adding product to basket
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (

       
      <div className="App">

            {/* <BrowserRouter>
            <Link to="/basket">Basket</Link>

            <Routes>
            <Route path="/basket" element={ <Basket /> } />

            </Routes>
        
        </BrowserRouter> */}
        <button onClick={handleAddToBasket}>Add to Basket</button>
        {showModal && (
          <BasketModal
            onClose={handleCloseModal}
            onAddToBasket={() => {
             
              handleCloseModal();
            }}
          />
        )}
      </div>
    );
  }
  
  export default App;
