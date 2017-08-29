import React, {Component} from 'react';
import {CollectionDetail} from "../components/CollectionDetail";
import {AsyncContent} from "../components/AsyncContent";

class CollectionDetailPage extends Component {
  render() {
    let content = null;
    if (this.props.collection) {
      content = <CollectionDetail data={this.props.collection} auth={this.props.auth}/>;
    } else {
      let resource = `recipes-collections/${this.props.match.params.slug}`;
      content = <AsyncContent
                  auth={this.props.auth}
                  host={process.env.REACT_APP_HOST}
                  resource={resource}
                  component={CollectionDetail}
                  extraProps={{auth: this.props.auth}} />;
    }
    return content
  }
}

export {CollectionDetailPage};
