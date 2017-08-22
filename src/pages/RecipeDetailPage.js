import React, { Component } from 'react';
import 'whatwg-fetch';
import 'url-search-params';
import {AsyncContent} from "../components/AsyncContent";
import {RecipeDetail} from "../components/RecipeDetail";

class RecipeDetailPage extends Component {
  render() {
    let content = null;
    if (this.props.recipe) {
      content = <RecipeDetail {...this.props.recipe} auth={this.props.auth} />;
    } else {
      let resource = `recipes/${this.props.match.params.id}`;
      content = (
          <AsyncContent
              auth={this.props.auth}
              host={process.env.REACT_APP_HOST}
              resource={resource}
              component={RecipeDetail}
              extraProps={{auth: this.props.auth}} />
      )
    }
    return content
  }
}

export {RecipeDetailPage};
