import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import './Assets/css/main.scss'
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import PrincipalPage from './PageComponents/PrincipalPage';
import SigninPage from './PageComponents/SigninPage';
import UserPage from './PageComponents/UserPage';
import Header from './OthersComponents/Header';
import Footer from './OthersComponents/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
