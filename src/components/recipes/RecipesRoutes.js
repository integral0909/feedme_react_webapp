import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RecipeBrowsePage, RecipeSavedPage,
  RecipeDetailPage, SearchPage, CollectionDetailPage
} from '../../pages/MainPages';

class RecipeRoutes extends Component {
  render() {
    let match = this.props.match;
    return (
        <Switch>
          <Route path={`${match.url}/search`} component={SearchPage}/>
          <Route path={`${match.url}/browse/:slug`}
                 render={({location, match}) => <CollectionDetailPage
                                                    auth={this.props.auth}
                                                    match={match} {...location.state} />}
          />
          <Route path={`${match.url}/browse`} exact
                 render={() => <RecipeBrowsePage auth={this.props.auth} />}
          />
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
