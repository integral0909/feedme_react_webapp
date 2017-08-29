import React, {Component} from 'react';
import {RecipeCard} from "./RecipeCard";

class CollectionDetail extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <h2>{this.props.data.name}</h2>
              {this.props.data.recipes.map(
                  (rcp) => <RecipeCard data={rcp} auth={this.props.auth} />
              )}
            </div>
          </div>
        </div>
    )
  }
}

export {CollectionDetail}
