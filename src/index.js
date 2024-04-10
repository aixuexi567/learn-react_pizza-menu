import React from 'react';
import ReactDOM from 'react-dom/client';

// App components
function App() {
  return <h1>Hello World</h1>;
}
// React V18
const root = ReactDOM.createRoot(document.getElementById('root'));
// strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
