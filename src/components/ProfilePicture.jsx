import React, {Component} from 'react';
import 'css/profilePicture.css';

class ProfilePicture extends Component {
  defaultPhotoURL = '';
  getPhotoUrl() {
    try {
      return this.props.user.providerData[0].photoURL || this.defaultPhotoURL;
    } catch (e) {
      return false;
    }
  }
  getDisplayLetter() {
    try {
      return this.props.user.displayName[0];
    } catch (e) {
      return this.props.user.email[0];
    }
  }
  render() {
    const photoUrl = this.getPhotoUrl();
    return photoUrl ? (
      <img src={this.getPhotoUrl()} alt={this.props.user.displayName}
           className="img-circle profile-picture"
      />
    ) : (
      <div className="img-circle profile-picture" title={this.props.user.displayName}>
        {this.getDisplayLetter()}
      </div>
    )
  }
}

export {ProfilePicture}