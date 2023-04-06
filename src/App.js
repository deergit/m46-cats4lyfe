import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import BasketModal from './components/BasketModal';
import Navbar from './Navbar';
import './App.css';
import CatAbout from './pages/CatAbout';
import HomePage from './pages/HomePage';

const App = () => {
  const APIKey = 'live_lpMrF7D80GK4J5PqOfjBJevGbqZk56CYvauSH2nzay440sP7RN7ILmCIL5yViVyy';
  const [catData, setCatData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('catCacheData'));

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

  const handleAddToBasket = (cat) => {
    setBasketItems([...basketItems, cat]);
    setShowModal(true);
  };

  const handleShowBasket = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <Navbar handleShowBasket={handleShowBasket} />
      {showModal && (
        <BasketModal
          onClose={handleCloseModal}
          onAddToBasket={() => {
            handleCloseModal();
          }}
        />)}
      <div className="image-grid">
        {catData.map((cat) => {
          return (
            <div className="grid-item" key={cat.id}>
              <img src={cat.url} alt={`Cat ${cat.id}`} />
              {cat.breed ? (
                <div className="overlay">
                  <p>{cat.breed}</p>
                  <p>{cat.description.toUpperCase()}</p>
                  <p>{cat.price}</p>
                  <button className="addBasketButton" onClick={() => handleAddToBasket(cat)}>Add to Basket</button>
                </div>) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;