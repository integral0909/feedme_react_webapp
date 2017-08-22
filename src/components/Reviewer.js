import React, {Component} from 'react';
import '../css/Reviewer.css';
import {post} from '../services/ApiService';

class Reviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {rating: props.rating, hover: false, loading: props.loading}
  }
  mouseOver = (idx) => {
    this.setState({rating: idx+1, hover: true})
  };
  mouseOut = () => {
    this.setState({rating: this.props.rating, hover: false})
  };
  handleClick = (newRating) => {
    newRating++;
    let resource = `${this.props.subject}s/${this.props.pg_id}/ratings`;
    post(resource, {rating: newRating}, this.props.auth.token)
        .then(() => this.props.handleUpdate(newRating))
        .catch(() => null);
    this.setState({loading: true})
  };
  componentWillReceiveProps(nextProps) {
    this.setState({loading: nextProps.loading})
  }
  render() {
    let rating = this.state.hover ? this.state.rating : this.props.rating;
    let ratingArray = ratingToArray(rating);
    let heading = `Rate this ${this.props.subject}`;
    if (this.props.rating > 0 || this.state.rating !== this.props.rating) {
      heading = 'Your rating';
    }
    let ulClasses = 'list-inline list-unstyled';
    if (this.state.loading) {
      ulClasses += ' spin';
    }
    return (
        <div className="reviewer feedmee-reviewer text-center">
          <p>{heading}</p>
          <ul className={ulClasses}>
            <StarLi handleOut={this.mouseOut} handleOver={this.mouseOver}
                    starPosition={0} highlight={ratingArray[0]} onClick={this.handleClick}/>
            <StarLi handleOut={this.mouseOut} handleOver={this.mouseOver}
                    starPosition={1} highlight={ratingArray[1]} onClick={this.handleClick}/>
            <StarLi handleOut={this.mouseOut} handleOver={this.mouseOver}
                    starPosition={2} highlight={ratingArray[2]} onClick={this.handleClick}/>
            <StarLi handleOut={this.mouseOut} handleOver={this.mouseOver}
                    starPosition={3} highlight={ratingArray[3]} onClick={this.handleClick}/>
            <StarLi handleOut={this.mouseOut} handleOver={this.mouseOver}
                    starPosition={4} highlight={ratingArray[4]} onClick={this.handleClick}/>
          </ul>
        </div>
    )
  }
}

function ReviewStar(props) {
  let classes = props.highlight ? 'fa fa-star' : 'fa fa-star-o';
  return (
      <i className={classes} />
  )
}
function StarLi(props) {
  return (
      <li onMouseOut={() => props.handleOut(props.starPosition)}
          onMouseOver={() => props.handleOver(props.starPosition)}
          onTouchStart={() => props.handleOver(props.starPosition)}
          onTouchCancel={() => props.handleOut(props.starPosition)}
          onClick={() => props.onClick(props.starPosition)}>
        <ReviewStar highlight={props.highlight}/>
      </li>
  )
}

function ratingToArray(rating) {
  let arr = [false, false, false, false, false];
  for (let i=0; i<rating; i++) {
    arr[i] = true;
  }
  return arr;
}

export {Reviewer}
