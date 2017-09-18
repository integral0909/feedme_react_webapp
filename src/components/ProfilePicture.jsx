import React, {Component} from 'react';
import 'css/profilePicture.css';

class ProfilePicture extends Component {
  defaultPhotoURL = '';
  getPhotoUrl() {
    try {
      return this.props.user.providerData[0].photoURL || this.defaultPhotoURL;
    } catch (e) {
      return this.defaultPhotoURL;
    }
  }
  render() {
    return (
      <img src={this.getPhotoUrl()} alt={this.props.user.displayName}
           className="img-circle profile-picture"
      />
    )
  }
}

export {ProfilePicture}