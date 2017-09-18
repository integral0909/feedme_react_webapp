import React, {Component} from 'react';
import {AsyncContent} from "components/AsyncContent";
import {RecipeCard} from "components/recipes/RecipeCard";

class SearchResultsPage extends Component {
  renderNoResults() {
    return (
      <div>
        <h2>Sorry, no recipes match your search</h2>
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <h1>Search results</h1>
        <div className="row">
          <div className="col-md-9">
            <AsyncContent
              auth={this.props.auth}
              host={process.env.REACT_APP_HOST}
              resource="recipes"
              searchParams={new URLSearchParams(this.props.location.search)}
              mergeResults
              infiniteScrolling
              loginRequired={false}
              component={RecipeCard}
              emptyResultsComponent={this.renderNoResults}
              extraProps={{auth: this.props.auth}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export {SearchResultsPage}