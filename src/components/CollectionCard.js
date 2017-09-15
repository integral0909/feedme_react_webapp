import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {AspectConstrainedImage} from "./AspectConstrainedImage";
import {Glyphicon, Table} from 'react-bootstrap';
import slugify from "slugify";
import {trimNearestWord} from "../utils";

class CollectionCard extends Component {
  render() {
    let collectionLocation = {
      pathname: `/recipe/browse/${this.props.data.slug}`,
      state: {collection: this.props.data}
    };
    return (
        <div className="card collection-card padded hover-shadow">
          <div className="row">
            <div className="col-sm-7">
              <Link to={collectionLocation}>
                <AspectConstrainedImage
                    imageUrl={this.props.data.image_url}
                    alt={this.props.data.name} ratio="16:9">
                  <div className="dark-overlay"/>
                  <h2>{this.props.data.name}</h2>
                </AspectConstrainedImage>
              </Link>
            </div>
            <div className="col-sm-5">
              <h3>Popular from this collection</h3>
              <Table>
                <tbody>
                {this.props.data.recipes.slice(0, 3).map(
                    (rcp) =>  <tr key={rcp.pg_id}><td>
                      <Link to={`/recipe/${rcp.pg_id}/${slugify(rcp.name, {lower: true})}`}>
                        {trimNearestWord(rcp.name, 45)}
                        <Glyphicon glyph="menu-right" className="pull-right" />
                      </Link>
                    </td></tr>

                )}
                <tr><td></td></tr>
                </tbody>
              </Table>
              <Link to={collectionLocation} className="text-center center-block">
                  View all recipes
              </Link>
            </div>
          </div>
        </div>
    )
  }
}

export {CollectionCard};
