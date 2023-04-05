// import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [images, setImages] = useState([]);

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

    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div className="grid-item" key={index}>
                    <img src={image.url} alt={`Cat ${index}`} />
                    {image.breeds ? (
                        <div className="overlay">
                            <p>{image.breeds[0].name}</p>
                            <p>{image.breeds[0].description}</p>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export default App;
