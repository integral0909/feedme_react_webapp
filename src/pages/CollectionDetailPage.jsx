import React, {Component} from 'react';
import {CollectionDetail} from "../components/CollectionDetail";
import {AsyncContent} from "../components/AsyncContent";

class CollectionDetailPage extends Component {
  render() {
    let resource = `recipes-collections/${this.props.match.params.slug}`;
    return <AsyncContent
            auth={this.props.auth}
            host={process.env.REACT_APP_HOST}
            resource={resource}
            component={CollectionDetail}
            extraProps={{auth: this.props.auth}} />;
  }
}

export {CollectionDetailPage};
