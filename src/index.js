import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';

// App components
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
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
  // const pizzas = [];
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Jiang Menu</h2>
      {pizzas.length > 0 ? (
        <React.Fragment>
          <p>what a pretty day! Get a Pizza with your friends</p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza key={index} {...pizza} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Sorry, no pizzas available</p>
      )}
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
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00</p>
      )}
    </footer>
  );
}
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come and viste us or
        order online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
function Pizza({ name, photoName, price, ingredients, soldOut }) {
  if (soldOut) return null;
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
