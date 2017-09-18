import React, {Component} from 'react';
import {getLoadingSpinner} from "../utils";
import {CollectionCard} from "./CollectionCard";
import { Link } from 'react-router-dom';
import {
  Glyphicon, DropdownButton, MenuItem, ButtonGroup
} from 'react-bootstrap';
import Media from "react-media";
import 'css/collectionList.css';

class CollectionList extends Component {
  renderCollectionList(Elem) {
    return this.props.data.map(obj => (
        <Elem key={obj.pg_id}>
          <Link to={`/recipe/browse/${obj.slug}`}>
            {obj.name} <Glyphicon glyph="menu-right" className="pull-right"/>
          </Link>
        </Elem>
      ));
  }
  render() {
    const {loading} = this.props;
    return (
      <div className="row">
        <div className="col-md-9 collections-list">
          <Media query="(max-width: 991px)" render={() => (
            <ButtonGroup justified>
              <DropdownButton bsStyle="default"
                              className="btn-white"
                              title={
                                <div>
                                  All Collections
                                  <Glyphicon glyph="chevron-down"
                                             className="pull-right"/>
                                </div>
                              }
                              noCaret
                              id="all-collections-dropdown">
                {this.renderCollectionList(MenuItem)}
              </DropdownButton>
            </ButtonGroup>
          )}/>
          <ul className="list-unstyled">
            {this.props.data.map(
                (obj) => <CollectionCard data={obj} key={obj.pg_id} />
            )}
          </ul>
          {getLoadingSpinner(loading)}
        </div>
        <Media query="(min-width: 992px)" render={() => (
          <div className="col-md-3 card padded">
            <h3>All collections</h3>
            <ul className="list-unstyled collection-list">
              {this.renderCollectionList('li')}
            </ul>
            {getLoadingSpinner(loading, null, '80px')}
          </div>
        )}/>
      </div>
    )
  }
}

export {CollectionList}
