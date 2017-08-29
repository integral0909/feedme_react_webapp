import React, {Component} from 'react';
import {getLoadingSpinner} from "../utils";
import {CollectionCard} from "./CollectionCard";
import { Link } from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

class CollectionList extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-9">
            <ul className="list-unstyled">
              {this.props.data.map(
                  (obj) => <CollectionCard data={obj} key={obj.pg_id} />
              )}
            </ul>
            {getLoadingSpinner(this.props.loading)}
          </div>
          <div className="col-sm-3 card padded">
            <h3>All collections</h3>
            <ul className="list-unstyled collection-list">
              {this.props.data.map(
                  (obj) => <li key={obj.pg_id}>
                            <Link to={`/recipes/browse/${obj.slug}`}>
                              {obj.name} <Glyphicon glyph="menu-right" className="pull-right"/>
                            </Link>
                           </li>
              )}
            </ul>
            {getLoadingSpinner(this.props.loading, null, '80px')}
          </div>
        </div>
    )
  }
}

export {CollectionList}
