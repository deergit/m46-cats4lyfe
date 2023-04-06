import { useParams, Link } from 'react-router-dom';
import './CatAbout.css';

const CatAbout = () => {
  const { id } = useParams();
  const cachedImages = JSON.parse(localStorage.getItem('images'));
  const image = cachedImages[id];

  return (
    <div className="container">
        <div className="cat-image">
            <img src={image.url} alt={`Cat ${id}`} />
        </div>
        <div className="cat-info">
            {image.breeds ? (
                <>
                    <h2 className="cat-breed">{image.breeds[0].name}</h2>
                    <p className="cat-description">{image.breeds[0].description}</p>
                </>
            ) : (
                <>
                    <h2 className="cat-breed">Unknown Breed</h2>
                    <p className="cat-description">No information available for this cat.</p>
                </>
            )}
            <Link to="/" className="back-link">
                Back to Home
            </Link>
        </div>
    </div>
);
}
export default CatAbout;