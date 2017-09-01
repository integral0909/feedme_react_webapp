import React, {Component} from 'react';
import {extractHostname} from "../utils";

class HostLink extends Component {
  render() {
    return <a href={this.props.url} target="_blank">{extractHostname(this.props.url)}</a>;
  }
}

export {HostLink}
