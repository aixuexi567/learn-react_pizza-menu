import React from 'react';
import ReactDOM from 'react-dom/client';

// App components
function App() {
  return (
    <>
      <h1>Hello World!!</h1>
      <Pizza />
    </>
  );
}
function Pizza() {
  return (
    <>
      <h1>Hello Pizza!!</h1>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
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
