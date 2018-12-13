import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import UserProvider from './contexts/UserContext';

import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
import CartOrder from './components/Cart/CartOrder';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories/" component={ItemListPage} />
            <CartOrder />
            <Route path="/item/" component={ItemDetailPage} />
            <Route exact path="/members/login/" component={LoginPage} />
            <Route exact path="/members/signup/" component={SignUpPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
