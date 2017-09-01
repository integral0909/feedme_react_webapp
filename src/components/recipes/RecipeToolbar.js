import React, {Component} from 'react';
import {ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {ShareGroup} from "../ShareGroup";
import {SaveButton} from "../SaveButton";

class RecipeToolbar extends Component {
  render() {
    return (
        <ButtonToolbar>
          <ShareGroup url={this.props.url} title={this.props.title} />
          <ButtonGroup>
            <SaveButton saved={this.props.saved} type="recipe"
                        pg_id={this.props.pg_id} auth={this.props.auth}
                        saveCallback={this.props.saveCallback}
            />
          </ButtonGroup>
        </ButtonToolbar>
    )
  }
}

export {RecipeToolbar}
