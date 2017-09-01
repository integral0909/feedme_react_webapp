import React, { Component } from 'react';
import {get} from "../services/ApiService";
import {getLoadingSpinner} from "../utils";

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
    /* Endpoints which list many results will wrap those results in an object
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
    get(props.resource, props.searchParams, props.auth)
        .then((json) => {
          return json.results ? this.handleManyResults(json) : this.handleOneResult(json);
      }).catch((ex) => this.setState({didLoad: false, loading: false, error: true}));
  };
  unmountChildHandler = (key) => {
    let newResults = Array.from(this.state.results);
    newResults.splice(key, 1); // Could save return value here for "Undo" feature
    this.setState({results: newResults})
  };
  getMainContent(DynamicComponent) {
    if (this.props.singleInstanceComponent) {
      return (
          <div>
            <DynamicComponent data={this.state.results} {...this.props.extraProps}
                              loading={this.state.loading} />
          </div>);
    } else {
      return (
          <div>
            {this.state.results.map((item, idx) => {
              let key = item.pg_id ? item.pg_id : idx;
              return <DynamicComponent data={item} {...this.props.extraProps} key={key}
                                       unMountMe={this.unmountChildHandler} idx={idx}
              />
            })}
          </div>
      );
    }
  }
  render() {
    let DynamicComponent = this.props.component;
    let content = null;
    if (this.state.results.length) {
      content = this.getMainContent(DynamicComponent);
    } else if (this.props.loginRequired && (!this.props.auth.user)) {
      content = (<h2 className="text-center">Log in required</h2>)
    }
    return (
        <div>
          {content || getLoadingSpinner(this.state.loading)}
        </div>
    );
  }
}

export {AsyncContent};
