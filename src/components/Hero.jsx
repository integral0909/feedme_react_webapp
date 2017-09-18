import React, {Component} from 'react';
import 'css/hero.css';

class Hero extends Component {
  render() {
    let classes = `hero-section ${this.props.className || ''}`;
    let overlay = null;
    let heroStyle = this.props.style || {};
    if (this.props.overlay) {
      overlay = <div className="dark-overlay" style={{opacity: 0.7}}></div>;
      heroStyle['color'] = '#FFF';
    }
    if (this.props.backgroundUrl) {
      heroStyle['backgroundImage'] = `url(${this.props.backgroundUrl})`
    }
    return (
        <div className={classes} style={heroStyle}>
          {overlay}
          <div className={`content-wrapper ${this.props.centered ? 'center-content' : ''}`}>
            {this.props.children}
          </div>
        </div>
    )
  }
}

export {Hero}
