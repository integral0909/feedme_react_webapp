import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.json().detail);
    error.response = response;
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

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
    }
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
    let searchStr = props.searchParams ? props.searchParams.toString() : '';
    fetch(`${props.host}${props.resource}?${searchStr}`, {
      headers: {'Authorization': `Bearer ${props.auth.token}`}
    }).then(checkStatus).then(parseJSON).then((json) => {
      return json.results ? this.handleManyResults(json) : this.handleOneResult(json);
    }).catch((ex) => {
      console.error('Request failed:', ex);
      this.setState({didLoad: false, loading: false, error: true})
    });
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
