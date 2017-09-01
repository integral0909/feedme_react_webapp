import React, {Component} from 'react';
import {secondsToDisplayTime} from "../../utils";


class RecipePropertyRow extends Component {
  render() {
    let prepTime = secondsToDisplayTime(this.props.prepTimeSeconds);
    let cookTime = secondsToDisplayTime(this.props.cookTimeSeconds);
    return (
        <div className="row">
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
    )
  }
}

export {RecipePropertyRow}
