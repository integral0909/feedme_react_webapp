import React, {Component} from 'react';

class AutocroppedImage extends Component {
  buildDivStyle() {
    const imgUrl = this.props.src;
    let divStyle = {...this.props.style, 'backgroundImage': `url(${imgUrl}`};
    return divStyle
  }
  render() {
    const classes = `${this.props.className} img-autocropped`;
    return (
      <div className={classes} style={this.buildDivStyle()} title={this.props.alt}>
        {this.props.children}
      </div>
    )
  }
}

export {AutocroppedImage}