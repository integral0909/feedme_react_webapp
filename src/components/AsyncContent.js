import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import 'whatwg-fetch';
import {get} from "../services/ApiService";

class AsyncContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      didLoad: false,
      error: false,
      nextPage: null,
      prevPage: null,
      results: [],
      totalResourceCount: 0
    };
  }
  componentDidMount = () => {
    if (this.props.auth.token) {
      this.requestResource(this.props)
    }
  };
  componentWillReceiveProps = (nextProps) => {
    if (this.props.auth.token !== nextProps.auth.token) {
      this.requestResource(nextProps)
    }
  };
  handleManyResults(json) {
    /* Endpoints which list many results will wrap those results in a meta object
      and store the results in a results property. */
    let results = json.results;
    if (this.props.mergeResults) {
      results = this.state.results.concat(results);
    }
    this.setState({
      didLoad: true, loading: false, results: results,
      nextPage: json.next, prevPage: json.prev, totalResourceCount: json.count
    })
  }
  handleOneResult(json) {
    this.setState({
      didLoad: true, loading: false, nextPage: null, prevPage: null, results: [json]
    })
  }
  requestResource = (props) => {
    this.setState({loading: true, didLoad: false});
    get(props.resource, props.searchParams, props.auth.token)
        .then((json) => {
          return json.results ? this.handleManyResults(json) : this.handleOneResult(json);
      }).catch((ex) => this.setState({didLoad: false, loading: false, error: true}));
  };
  getLoadingSpinner = (isLoading, type, color, width) => {
    return isLoading ? <ReactLoading type={type} color={color} width={width} /> : null;
  };
  render() {
    let DynamicComponent = this.props.component;
    let content = (<h2>Log in required</h2>);
    let loading = this.getLoadingSpinner(this.state.loading, 'bubbles', '#E73D57', '120px');
    if (this.props.auth.user) {
      if (this.state.results.length) {
        content = (
            <div>
              {this.state.results.map((item, idx) => {
                return <DynamicComponent {...item} {...this.props.extraProps} key={idx} />
              })}
            </div>
        );
      } else {
        content = null
      }
    }
    return (
        <div>
          {content}
          {loading}
        </div>
    );
  }
}

export {AsyncContent};
