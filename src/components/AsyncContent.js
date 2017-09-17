import React, { Component } from 'react';
import {get} from "../services/ApiService";
import {getLoadingSpinner} from "../utils";
import {NoMatch} from "pages/NoMatch";
import Waypoint from 'react-waypoint';

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
    if (this.props.infiniteScrolling) {
      this.scrollTriggerBuffer = 10;
    }
  }
  componentDidMount = () => {
    if (this.props.auth.token || !this.props.loginRequired) {
      this.requestResource(this.props)
    }
  };
  componentWillReceiveProps = (nextProps) => {
    if (this.props.auth.token !== nextProps.auth.token || !this.props.loginRequired) {
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
      didLoad: true, loading: false, results: results, error: false,
      nextPage: json.next, prevPage: json.prev, totalResourceCount: json.count
    })
  }
  handleOneResult(json) {
    this.setState({
      didLoad: true, loading: false, nextPage: null, prevPage: null, results: [json],
      error: false
    })
  }
  requestResource = (props) => {
    this.setState({loading: true, didLoad: false});
    get(props.resource, props.searchParams, props.auth)
      .then((json) => {
        return json.results ? this.handleManyResults(json) : this.handleOneResult(json);
      })
      .catch((ex) => {
        this.setState({didLoad: false, loading: false, error: true})
    });
  };
  loadNextPage = () => {
    if (this.state.results.length === this.state.totalResourceCount) {
      return
    }
    let urlArray = this.state.nextPage.split('?');
    let searchParams = new URLSearchParams('');
    if (urlArray.length > 1) {
      searchParams = new URLSearchParams(urlArray[1]);
    }
    this.requestResource(Object.assign({}, this.props, {searchParams: searchParams}))
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
            {getLoadingSpinner(this.state.loading)}
          </div>);
    } else {
      return (
          <div>
            {this.state.results.map((item, idx) => {
              let key = item.pg_id ? item.pg_id : idx;
              if (this.props.infiniteScrolling && this.state.nextPage) {
                if (idx === (this.state.results.length - this.scrollTriggerBuffer)) {
                  return (
                    <Waypoint onEnter={this.loadNextPage}>
                      <div>
                        <DynamicComponent data={item} {...this.props.extraProps} key={key}
                                        unMountMe={this.unmountChildHandler} idx={idx} />
                      </div>
                    </Waypoint>
                  )
                }
              }
              return <DynamicComponent data={item} {...this.props.extraProps} key={key}
                                       unMountMe={this.unmountChildHandler} idx={idx} />
            })}
            {getLoadingSpinner(this.state.loading)}
          </div>
      );
    }
  }
  render() {
    let DynamicComponent = this.props.component;
    let EmptyComponent = this.props.emptyResultComponent;
    let NotFoundComponent = this.props.notFoundComponent || NoMatch;
    let content = null;
    if (this.props.loginRequired && (!this.props.auth.user)) {
      content = <h2 className="text-center">Log in required</h2>
    }
    if (this.props.show404 && this.state.error) {
      content = <NotFoundComponent/>
    }
    if (this.state.results.length) {
      content = this.getMainContent(DynamicComponent);
    } else if (this.props.emptyResultComponent) {
      content = <EmptyComponent/>
    }
    return content || getLoadingSpinner(this.state.loading);
  }
}

export {AsyncContent};
