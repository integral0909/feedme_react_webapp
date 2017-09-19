import React, { Component } from 'react';
import {AsyncContent} from "../components/AsyncContent";
import {CollectionList} from "../components/CollectionList";

class RecipeBrowsePage extends Component {
  render() {
    return (
        <div className="container">
          <h1>Browse collections</h1>
          <AsyncContent
              auth={this.props.auth}
              host={process.env.REACT_APP_HOST}
              resource="recipes-collections"
              mergeResults
              singleInstanceComponent
              component={CollectionList}
              extraProps={{auth: this.props.auth}}
          />
        </div>
    )
  }
}

export {RecipeBrowsePage};
