import { useParams, Link } from 'react-router-dom';
import './CatAbout.css';

const CatAbout = ({ catData }) => {
  const { id } = useParams();
  const image = catData.find((cat) => cat.id === parseInt(id));

  return (
    <div className="container">
      <div className="cat-image">
        <img src={image.url} alt={`Cat ${id}`} />
      </div>
      <div className="cat-info">
        {image.breed ? (
          <>
            <h2 className="cat-breed">{image.breed}</h2>
            <p className="cat-description">{image.description}</p>
            <p className="cat-price">{image.price}</p>
            <button >Add to Basket</button>
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
};

export default CatAbout;