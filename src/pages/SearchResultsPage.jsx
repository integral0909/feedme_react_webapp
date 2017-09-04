import React, {Component} from 'react';
import {AsyncContent} from "components/AsyncContent";
import {RecipeCard} from "components/recipes/RecipeCard";

class SearchResultsPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Search results</h1>
        <div className="row">
          <div className="col-sm-9">
            <AsyncContent
              auth={this.props.auth}
              host={process.env.REACT_APP_HOST}
              resource="recipes"
              searchParams={new URLSearchParams(this.props.location.search)}
              mergeResults
              loginRequired={false}
              component={RecipeCard}
              extraProps={{auth: this.props.auth}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export {SearchResultsPage}