import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Route } from 'react-router-dom';
import SearchView from '../components/Search/SearchView';
import Search from '../containers/Search';

export default class SearchPage extends Component {
  render() {
    const { searchStr, location } = this.props;
    console.log(location);
    return (
      <div>
        <Layout>
          <Route
            exact
            path={`/search/?search_str=${searchStr}`}
            component={SearchView}
          />
          <Search key={location.search} {...this.props} />
        </Layout>
      </div>
    );
  }
}
