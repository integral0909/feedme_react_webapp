import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {post} from "../services/ApiService";


class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, saved: props.saved}
  }
  sendSaveState() {
    let typeId = `${this.props.type}_id`;
    let newSaveState = !this.state.saved;
    let resource = `likes/${this.props.type}s`;
    let data = {did_like: newSaveState, [typeId]: this.props.pg_id};
    post(resource, data, this.props.auth)
        .then(() => {
          this.setState({loading: false, saved: newSaveState})
          if (this.props.saveCallback) {
            this.props.saveCallback(newSaveState)
          }
        })
        .catch((ex) =>  this.setState({loading: false}));
  }
  handleClick = () => {
    this.sendSaveState();
    this.setState({loading: true});
  };
  getLoadingIndicator(bgIsWhite) {
    let color =  bgIsWhite ? '#E73D57' : '#FFF';
    return <ReactLoading type="bubbles" color={color} width="23px" height="20px" />
  }
  render() {
    let content = <span><i className="fa fa-heart"/> Save</span>;
    let classes = this.props.className || '';
    if (this.state.saved) {
      content = <span><i className="fa fa-heart-o"/> Unsave</span>;
      classes = `${classes} btn-red-hollow`;
    }
    if (this.state.loading) {
      content = this.getLoadingIndicator((classes.indexOf('btn-red-hollow') !== -1))
    }
    return (
        <Button className={classes} onClick={this.handleClick}>
          {content}
        </Button>
    )
  }
}

export {SaveButton};
