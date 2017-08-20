import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
import {extractHostname, secondsToDisplayTime} from "../utils";

class RecipeCard extends Component {
  render() {
    let hostName = extractHostname(this.props.source_url);
    let prepTime = secondsToDisplayTime(this.props.prep_time_seconds);
    let cookTime = secondsToDisplayTime(this.props.cook_time_seconds);
    let recipeLocation = {
      pathname: `/recipes/${this.props.pg_id}`,
      state: {recipe: this.props}
    };
    return (
      <div className="card recipe-card">
        <div className="row">
          <div className="col-sm-6">
            <Link to={recipeLocation}>
            <img src={this.props.image_url} alt={this.props.name} className="img-responsive"/>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to={recipeLocation}>
              <h2 className="pink">{this.props.name}</h2>
            </Link>
            <p>Recipe from <a href={this.props.source_url} target="_blank">{hostName}</a></p>
            <div className="row card-row">
              <div className="col-xs-3">
                <strong>{prepTime}</strong><br />
                <small className="text-muted">PREP TIME</small>
              </div>
              <div className="col-xs-3">
                <strong>{cookTime}</strong><br />
                <small className="text-muted">COOK TIME</small>
              </div>
              <div className="col-xs-3">
                <strong>{this.props.servings}</strong><br />
                <small className="text-muted">SERVINGS</small>
              </div>
              <div className="col-xs-3">
                <strong>{this.props.difficulty}</strong><br />
                <small className="text-muted">DIFFICULTY</small>
              </div>
            </div>
            <div className="row card-row">
              <div className="col-xs-12">
                <small className="text-muted">DIETARY INFO</small><br />
                <ul className="list-inline">
                  {this.props.keywords.map((item, i) => {
                    return (<li key={i}>{item}</li>)
                  })}
                </ul>
              </div>
            </div>
            <div className="row card-row">
              <div className="col-xs-12">
                <ButtonGroup bsSize="large">
                  <Button>{this.props.saved ? 'Unsave' : 'Save' }</Button>
                  <Button>Share</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {RecipeCard};
