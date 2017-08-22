import React, {Component} from 'react';

class RatingsSummary extends Component {
  render() {
    return (
    <div className="ratings-summary">
      <i className="fa fa-star"/><strong> {this.props.rating}</strong> |  {this.props.ratingsCount} reviews
    </div>
    )
  }
}

export {RatingsSummary}
