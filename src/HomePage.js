import { Link } from 'react-router-dom';

const HomePage = ({ images, handleAddToBasket }) => {
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div className="grid-item" key={index}>
                    <Link to={`/about/${index}`}>
                        <img src={image.url} alt={`Cat ${index}`} />
                    </Link>
                    {image.breeds ? (
                        <div className="overlay">
                            <p>{image.breeds[0].name}</p>
                            <p>{image.breeds[0].description}</p>
                            <button onClick={handleAddToBasket}>Add to Basket</button>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default HomePage;