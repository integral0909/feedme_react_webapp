import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import 'whatwg-fetch';
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
    post(resource, data, this.props.auth.token)
        .then(() => this.setState({loading: false, saved: newSaveState}))
        .catch((ex) =>  this.setState({loading: false}));
  }
  handleClick = () => {
    this.sendSaveState();
    this.setState({loading: true});
  };
  render() {
    let text = 'Save';
    let classes = this.props.className || '';
    if (this.state.saved) {
      text = 'Unsave';
      classes = `${classes} btn-red-hollow`;
    }
    if (this.state.loading) {
      let color = classes.indexOf('btn-red-hollow') !== -1 ? '#E73D57' : '#FFF';
      text = <ReactLoading type="bubbles" color={color} width="23px" height="20px" />
    }
    return (
        <Button className={classes} onClick={this.handleClick}>
          {text}
        </Button>
    )
  }
}

export {SaveButton};
