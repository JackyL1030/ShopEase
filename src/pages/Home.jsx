import { Link } from 'react-router-dom';
import { getProducts } from '../data/products';

function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopEase</h1>
        <p className="home-subtitle">Your one-stop shop for all your needs.</p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-image"
              />
              <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <div>
                  <Link>View Details</Link>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
