import React, {Component} from 'react';
import {HostLink} from "./HostLink";

class SourceLink extends Component {
  render() {
    return this.props.url ? (
        <p>{this.props.type} from <HostLink url={this.props.url} /></p>
    ) : <p/>;
  }
}

export {SourceLink}
