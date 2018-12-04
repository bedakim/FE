import React, { Component } from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
