import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasketModal from './components/BasketModal';
import Navbar from './Navbar';
import HomePage from './HomePage';
import CatAbout from './CatAbout';

// notes: to use more than 10 images you need the API key

const App = () => {
    const APIKey = 'live_lpMrF7D80GK4J5PqOfjBJevGbqZk56CYvauSH2nzay440sP7RN7ILmCIL5yViVyy';
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cachedImages = JSON.parse(localStorage.getItem('images'));

        if (cachedImages) {
            setImages(cachedImages.slice(0, 9));
        } else {
            fetch('https://api.thecatapi.com/v1/images/search?limit=12')
                .then(response => response.json())
                .then(data => {
                    setImages(data.slice(0, 9));
                    localStorage.setItem('images', JSON.stringify(data));
                });
        }
    }, []);

    const handleAddToBasket = () => {
        // Add logic for adding product to basket
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage images={images} handleAddToBasket={handleAddToBasket} />} />
                    <Route path="/about/:id" element={<CatAbout />} />
                </Routes>
                {showModal && (
                    <BasketModal
                        onClose={handleCloseModal}
                        onAddToBasket={() => {
                            handleCloseModal();
                        }}
                    />
                )}
            </div>
        </BrowserRouter>
    );
};

export default App;