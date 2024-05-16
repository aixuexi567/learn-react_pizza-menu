import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';

// App components
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {
    textTransform: 'uppercase',
    fontSize: '48px',
    color: 'red',
    fontWeight: 'bold',
  };
  return (
    <header style={style} className="header">
      <h1>Fase React Pizza</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Jiang Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </ul>
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      We're currently open. {new Date().toLocaleTimeString()}
      <span>We're {isOpen ? 'Open' : 'Closed'}</span>
    </footer>
  );
}
function Pizza({ name, photoName, price, ingredients, soldOut }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
        {soldOut && <span className="">Sold Out</span>}
      </div>
    </li>
  );
}
// React V18
const root = ReactDOM.createRoot(document.getElementById('root'));
// strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
