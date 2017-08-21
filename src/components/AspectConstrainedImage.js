import React, {Component} from 'react';
import '../css/Images.css';

class AspectConstrainedImage extends Component {
  buildDivStyle() {
    const imgUrl = this.props.imageUrl;
    let divStyle = this.props.style || {};
    divStyle['backgroundImage'] = `url(${imgUrl})`;
    divStyle = this.convertRatioToPadding(divStyle);
    return divStyle
  }
  convertRatioToPadding(divStyle) {
    switch (this.props.constrainBy) {
      case 'height':
        divStyle['paddingLeft'] = this.convertRatioToPaddingLeft();
        return divStyle;
      default:
      case 'width':
        divStyle['paddingBottom'] = this.convertRatioToPaddingBottom();
        return divStyle;
    }
  }
  convertRatioToPaddingBottom() {
    const ratios = this.props.ratio.split(':');
    return `${ratios[1] / ratios[0] * 100}%`;
  }
  convertRatioToPaddingLeft() {
    const ratios = this.props.ratio.split(':');
    return `${ratios[0] / ratios[1] * 100}%`;
  }
  render() {
    const classes = `${this.props.className} img-aspect`;
    return (
        <div className={classes} style={this.buildDivStyle()} title={this.props.alt}>
          {this.props.children}
        </div>
    )
  }
}

export {AspectConstrainedImage}
