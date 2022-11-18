import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';

import { store } from './redux/store';
import './index.css';

// TODO: add header/ footer layout containers
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <main className="main-container">
        <RouterProvider router={router} />
      </main>
    </Provider>
  </React.StrictMode>
);
