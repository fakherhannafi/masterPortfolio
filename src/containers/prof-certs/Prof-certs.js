import React, { Component } from "react";
import "./Prof-certs.css";
import { Fade } from "react-reveal";
import { profCerts } from "../../portfolio";
import CredlyCard from "../../components/credlyCard/CredlyCard";

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
            <h6 className="certs-subtitle" style={{ color: theme.text }}>
              #{profCerts.certifications.length} since 2019
            </h6>
          </Fade>
        </div>
        <div className="certs-body-div">
          {profCerts.certifications.map((cert) => {
            return <CredlyCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProfCerts;
