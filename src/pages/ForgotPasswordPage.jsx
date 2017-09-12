import React, {Component} from 'react';
import {Grid, Col} from 'react-bootstrap';
import bgImg from 'assets/fdme_lifestyle_bg_lg_portrait.jpg';
import {AspectConstrainedImage} from "components/AspectConstrainedImage";
import 'css/passwordreset.css';
import {ForgotPassword} from "../components/ForgotPassword";

class ForgotPasswordPage extends Component {
  render() {
    return (
      <Grid className="card reset-password-card">
        <Col sm={6}>
          <ForgotPassword
            auth={this.props.auth}
            className="col-sm-6 col-sm-offset-3 text-center" />
        </Col>
        <Col sm={6}>
          <AspectConstrainedImage
            imageUrl={bgImg} alt="Food and phone" ratio="9:10"
          />
        </Col>
      </Grid>
    )
  }
}

export {ForgotPasswordPage}