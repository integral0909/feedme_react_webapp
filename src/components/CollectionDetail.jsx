import React, {Component} from 'react';
import {AsyncContent} from "./AsyncContent";
import {RecipeCard} from "./RecipeCard";

class CollectionDetail extends Component {
  render() {
    return (
        <div className="container">
          <h2>{this.props.data.name}</h2>
          {this.props.data.recipes.map(
              (rcp) => <RecipeCard data={rcp} auth={this.props.auth} />
          )}
        </div>
    )
  }
}

export {CollectionDetail}
