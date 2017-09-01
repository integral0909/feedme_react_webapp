import React, {Component} from 'react';
import {get} from '../services/ApiService'

class RatingsSummary extends Component {
  componentDidMount = () => {
    this.updateData();
  };
  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      this.updateData();
    }
  }
  updateData = () => {
    get(`${this.props.subject}/${this.props.pg_id}/ratings`, null, this.props.auth)
       .then((data) => this.props.onUpdate(data)).catch((ex) => console.error(ex));
  };
  render() {
    return (
    <div className="ratings-summary">
      <i className="fa fa-star"/><strong> {this.props.rating}</strong> |  {this.props.ratingsCount} reviews
    </div>
    )
  }
}

export {RatingsSummary}
