import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Header from './components/header/header';
import AppRoutes from './routes/app';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <AppRoutes />
        </Main>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
