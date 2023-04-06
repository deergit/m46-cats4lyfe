import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import BasketModal from './components/BasketModal';
import Navbar from './Navbar';
import './App.css';

// notes: to use more than 10 images you need the API key

const App = () => {
  const APIKey = 'live_lpMrF7D80GK4J5PqOfjBJevGbqZk56CYvauSH2nzay440sP7RN7ILmCIL5yViVyy';
  const [catData, setCatData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('catCacheData'));

    // images stored in cache to stop fetching in a loop
    if (cachedData && cachedData.length > 0) {
      setCatData(cachedData);
    } else {
      const fetchCatdata = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&api_key=${APIKey}`);
        const data = await response.json();
        const catConstructor = data.map((cat, index) => {
          return {
            id: index,
            url: cat.url,
            name: faker.name.fullName(),
            breed: faker.animal.cat(),
            description: faker.word.adjective(),
            price: faker.commerce.price(50, 2500, 2, "£")
          }
        })
        setCatData(catConstructor);
        localStorage.setItem('catCacheData', JSON.stringify(catConstructor));
      };
      fetchCatdata();
    }
  }, []);

  const handleAddToBasket = () => {
    setBasketItems([...basketItems, catData]);
    setShowModal(true);
  };



  const handleCloseModal = () => {
    setShowModal(false);
  };


  // rendered images
  return (
    <div className="container">
      <Navbar />
      <div className="image-grid">
        {catData.map((cat) => {
          return (
            <div className="grid-item" key={cat.id}>
              <img src={cat.url} alt={`Cat ${cat.id}`} />
              {cat.breed ? (
                <div className="overlay">
                  <p>{cat.breed}</p>
                  <p>{cat.description}</p>
                  <p>{cat.price}</p>
                </div>) : null}
              <button onClick={handleAddToBasket}>Add to Basket</button>
              {showModal && (
                <BasketModal
                  onClose={handleCloseModal}
                  onAddToBasket={() => {
                    handleCloseModal();
                  }}
                />)}

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;