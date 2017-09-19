import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'css/Cards.css';
import {secondsToDisplayTime} from "utils";
import {RecipeToolbar} from "./RecipeToolbar";
import {SourceLink} from "components/SourceLink";
import slugify from 'slugify';
import {trimNearestWord} from "utils";
import {AutocroppedImage} from "../AutocroppedImage";


class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false}
  }
  handleSaveChange = (newSaveState) => {
    if (!this.props.keepOnUnsave) {
      setTimeout(() => {
        this.props.unMountMe(this.props.idx);
      }, 400);
      this.setState({hidden: !newSaveState});
    }
  };
  render() {
    let prepTime = secondsToDisplayTime(this.props.data.prep_time_seconds);
    let cookTime = secondsToDisplayTime(this.props.data.cook_time_seconds);
    let recipeName = this.props.data.name;
    let keywords = this.props.data.keywords;
    const columnStyle = keywords.length ? {height: '310px'} : {height: '250px'};
    let recipeLocation = {
      pathname: `/recipe/${this.props.data.pg_id}/${slugify(recipeName, {lower: true})}`,
      state: {recipe: this.props.data}
    };
    let shareUrl = `https://www.feedmeeapp.com${recipeLocation.pathname}`;
    return (
      <div className={`card recipe-card hover-shadow fade ${this.state.hidden ? 'fade-out' : ''}`}>
        <div className="row">
          <div className="col-sm-6 image-column" style={columnStyle}>
            <Link to={recipeLocation}>
              <AutocroppedImage
                  style={columnStyle}
                  src={this.props.data.image_url}
                  alt={this.props.data.name} />
            </Link>
          </div>
          <div className="col-sm-6 detail-column" style={columnStyle}>
            <Link to={recipeLocation}>
              <h2 className="pink" title={recipeName}>{trimNearestWord(recipeName, 50)}</h2>
            </Link>
            <SourceLink url={this.props.data.source_url} type="Recipe"/>
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
                <strong>{this.props.data.servings}</strong><br />
                <small className="text-muted">SERVINGS</small>
              </div>
              <div className="col-xs-3">
                <strong>{this.props.data.difficulty}</strong><br />
                <small className="text-muted">DIFFICULTY</small>
              </div>
            </div>
                {keywords.length ? (
                  <div className="row card-row">
                    <div className="col-xs-12">
                      <small className="text-muted">DIETARY INFO</small>
                      <br />
                      <ul className="list-inline">
                        {keywords.map((item, i) => {
                          return <li key={i}>{item}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                ) : null}
            <div className="row card-row-sticky-bottom">
              <div className="col-xs-12">
                <RecipeToolbar url={shareUrl} pg_id={this.props.data.pg_id}
                               auth={this.props.auth} title={this.props.data.name}
                               saved={this.props.data.saved}
                               saveCallback={this.handleSaveChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {RecipeCard};
