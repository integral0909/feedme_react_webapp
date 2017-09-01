import React, { Component } from 'react';
import { AsyncContent} from "../components/AsyncContent";
import { RecipeCard} from "../components/recipes/RecipeCard";
import 'whatwg-fetch';
import 'url-search-params';

class RecipeSavedPage extends Component {
  render() {
    return (
        <div className="container" key={this.props.pg_id}>
          <h2>My saved recipes</h2>
          <div className="row">
            <div className="col-sm-9">
              <AsyncContent
                  auth={this.props.auth}
                  host={process.env.REACT_APP_HOST}
                  resource='recipes'
                  searchParams={new URLSearchParams('?saved=true')}
                  mergeResults
                  loginRequired
                  component={RecipeCard}
                  extraProps={{saved: true, auth: this.props.auth}}
              />
            </div>
          </div>
        </div>
    );
  }
}

export {RecipeSavedPage};
