import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RecipeBrowsePage, RecipeSavedPage,
  RecipeDetailPage, SearchPage
} from '../pages/MainPages';

class RecipeRoutes extends Component {
  render() {
    let match = this.props.match;
    return (
        <Switch>
          <Route path={`${match.url}/search`} component={SearchPage}/>
          <Route path={`${match.url}/browse`} component={RecipeBrowsePage} />
          <Route path={`${match.url}/saved`}
                 render={() => <RecipeSavedPage auth={this.props.auth} />}
          />
          <Route path={`${match.url}/:id`}
                 render={({location, match}) => <RecipeDetailPage auth={this.props.auth}
                                                                  {...location.state}
                                                                  match={match} />}
          />
        </Switch>
    )
  }
}

export {RecipeRoutes}
