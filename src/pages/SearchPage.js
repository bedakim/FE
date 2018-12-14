import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Route } from 'react-router-dom';
import SearchView from '../components/Search/SearchView';
import SearchBar from '../containers/SearchBar';

export default class SearchPage extends Component {
  render() {
    const { searchStr } = this.props;
    return (
      <div>
        <Layout>
          <Route
            exact
            path={`/search/?search_str=${searchStr}`}
            component={SearchView}
          />
          <SearchView />
        </Layout>
      </div>
    );
  }
}
