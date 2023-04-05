import { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BasketModal from './components/BasketModal';
import Navbar from './Navbar';


const App = () => {
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
        <div className="image-grid">
            <Navbar />
            {images.map((image, index) => (
                <div className="grid-item" key={index}>
                    <img src={image.url} alt={`Cat ${index}`} />
                    {image.breeds ? (
                        <div className="overlay">
                            <p>{image.breeds[0].name}</p>
                            <p>{image.breeds[0].description}</p>
                            <button onClick={handleAddToBasket}>Add to Basket</button>
                            {showModal && (
                                <BasketModal
                                    onClose={handleCloseModal}
                                    onAddToBasket={() => {

                                        handleCloseModal();
                                    }}
                                />)}
                        </div>)
                        : null}
                </div>
            ))}
        </div>
    );
}

export default App;