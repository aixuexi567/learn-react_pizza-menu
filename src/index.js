import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
    // textTransform: 'uppercase',
    // fontSize: '48px',
    // color: 'red',
    // fontWeight: 'bold',
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
      <Pizza />
      <Pizza />
      <Pizza />
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
      <h2>We're {isOpen ? 'Open' : 'Closed'}</h2>
    </footer>
  );
}
function Pizza() {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h3>Pizza Spinaci</h3>
    </>
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
