import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
import {extractHostname, secondsToDisplayTime} from "../utils";
import {ShareGroup} from "./ShareGroup"

class RecipeDetail extends Component {
  render() {
    let hostName = extractHostname(this.props.source_url);
    let prepTime = secondsToDisplayTime(this.props.prep_time_seconds);
    let cookTime = secondsToDisplayTime(this.props.cook_time_seconds);
    let pageUrl = `https://www.feedmeeapp.com/recipes/${this.props.pg_id}`;
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="card bordered">
                <div className="row">
                  <img src={this.props.image_url} alt={this.props.name} className="img-responsive"/>
                </div>
                <div className="row">
                  <div className="col-sm-6 bordered-right">
                    <h2 className="pink">{this.props.name}</h2>
                    <p className="text-muted">{this.props.description}</p>
                    <p>Recipe from <a href={this.props.source_url} target="_blank">{hostName}</a></p>
                    <p>
                      <ul className="list-inline text-muted">
                        {this.props.keywords.map((item, idx) => {
                          return (<li key={idx}>{item}</li>)
                        })}
                      </ul>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <h3>Share recipe</h3>
                    <ButtonToolbar>
                      <ShareGroup pageUrl={pageUrl} />
                      <ButtonGroup>
                        <Button>{this.props.saved ? 'Unsave' : 'Save' }</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
              <div className="card bordered">
                <div className="row">
                  <div className="col-sm-7 bordered-right">
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
                  <div className="col-sm-5">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export {RecipeDetail};
