import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {AspectConstrainedImage} from "./AspectConstrainedImage";
import {Glyphicon, Table} from 'react-bootstrap';
import slugify from "slugify";
import {trimNearestWord} from "../utils";
import {Media} from "react-media";

class CollectionCard extends Component {
  render() {
    let collectionLocation = {
      pathname: `/recipe/browse/${this.props.data.slug}`,
      state: {collection: this.props.data}
    };
    let recipes = this.props.data.recipes;
    let imageUrl = this.props.data.image_url || recipes[0].image_url;
    return (
        <div className="card collection-card padded hover-shadow">
          <div className="row">
            <div className="col-sm-7">
              <Link to={collectionLocation}>
                <Media query="(min-width: 1200px)">
                  {matches => matches ? (
                    <AspectConstrainedImage
                      imageUrl={imageUrl}
                      alt={this.props.data.name} ratio="16:9" className="collection-card-img">
                      <div className="dark-overlay"/>
                      <h2>{this.props.data.name}</h2>
                    </AspectConstrainedImage>
                  ) : (
                    <Media query="(min-width: 768px)">
                      {matches => matches ? (
                        <AspectConstrainedImage
                          imageUrl={recipes[0].image_url}
                          alt={this.props.data.name} ratio="12:10" className="collection-card-img">
                          <div className="dark-overlay"/>
                          <h2>{this.props.data.name}</h2>
                        </AspectConstrainedImage>
                      ) : (
                        <AspectConstrainedImage
                          imageUrl={recipes[0].image_url}
                          alt={this.props.data.name} ratio="16:9" className="collection-card-img">
                          <div className="dark-overlay"/>
                          <h2>{this.props.data.name}</h2>
                        </AspectConstrainedImage>
                      )}
                    </Media>
                  )}
                </Media>
              </Link>
            </div>
            <div className="col-sm-5">
              <h3>Popular from this collection</h3>
              <Table className="collection-card-table">
                <tbody>
                {recipes.slice(0, 3).map(
                    (rcp) =>  <tr key={rcp.pg_id}><td>
                      <Link to={`/recipe/${rcp.pg_id}/${slugify(rcp.name, {lower: true})}`}>
                        <Glyphicon glyph="menu-right" className="pull-right" />
                        <div>{trimNearestWord(rcp.name, 45)}</div>

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
