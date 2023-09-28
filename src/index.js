import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'normalize.css';
import './index.css';
import './styles/variables.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goose-track-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
