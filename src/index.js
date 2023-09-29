import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'normalize.css';
import './index.css';
import './styles/variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goose-track-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
