import React, { Component } from 'react';
import 'whatwg-fetch';
import 'url-search-params';
import {AsyncContent} from "../components/AsyncContent";
import {RecipeDetail} from "../components/RecipeDetail";

class RecipeDetailPage extends Component {
  render() {
    let content = null;
    if (this.props.recipe) {
      content = <RecipeDetail {...this.props.recipe} />;
    } else {
      let resourceUrl = `/api/recipes/${this.props.match.params.id}/`;
      content = (
          <AsyncContent
              auth={this.props.auth}
              host='http://localhost:8000'
              resource={resourceUrl}
              component={RecipeDetail} />
      )
    }
    return content
  }
}

export {RecipeDetailPage};
