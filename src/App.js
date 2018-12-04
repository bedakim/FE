import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
<<<<<<< HEAD
import CartPage from './pages/CartPage';
=======
import LoginPage from './pages/LoginPage';
>>>>>>> ebe5b6e3ed4fd2b636a34321765fd779f100534a

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/" component={ItemListPage} />
<<<<<<< HEAD
          <Route path="/cart/" component={CartPage} />
=======
          <Route path="/login" component={LoginPage} />
>>>>>>> ebe5b6e3ed4fd2b636a34321765fd779f100534a
        </>
      </BrowserRouter>
    );
  }
}
