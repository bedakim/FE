import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/" component={ItemListPage} />
        </>
      </BrowserRouter>
    );
  }
}
