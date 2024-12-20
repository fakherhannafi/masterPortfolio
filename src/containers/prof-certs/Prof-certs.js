import React, { Component } from "react";
import "./Prof-certs.css";
import { Fade } from "react-reveal";
import { profCerts } from "../../portfolio";
import CredlyCard from "../../components/credlyCard/CredlyCard";

class ProfCerts extends Component {
  componentDidMount() {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  }
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
            <h6 className="certs-subtitle" style={{ color: theme.text }}>
              <a
                href="https://www.credly.com/users/fakher-hannafi"
                target="_blank"
              >
                My Credy Profile
              </a>
            </h6>
          </Fade>
        </div>
        <div className="certs-body-div">
          {profCerts.certifications.map((cert, index) => {
            return (
              <CredlyCard
                key={cert.credly_id || index}
                certificate={cert}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProfCerts;
