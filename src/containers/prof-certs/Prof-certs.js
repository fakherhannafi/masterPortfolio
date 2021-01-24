import React, { Component } from "react";
import "./Prof-certs.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class ProfCerts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Professional Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div"></div>
      </div>
    );
  }
}

export default ProfCerts;
