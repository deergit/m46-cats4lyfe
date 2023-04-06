import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ catData }) => {
  return (
    <div className="container">
      <div className="image-grid">
        {catData.map((cat) => {
          return (
            <div className="grid-item" key={cat.id}>
              <Link to={`/about/${cat.id}`}>
                <img src={cat.url} alt={`Cat ${cat.id}`} />
              </Link>
              {cat.breed ? (
                <div className="overlay">
                  <p>{cat.breed}</p>
                  <p>{cat.description}</p>
                  <p>{cat.price}</p>
                  <button >Add to Basket</button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;