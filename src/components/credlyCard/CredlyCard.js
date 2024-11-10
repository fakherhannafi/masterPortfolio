import React, { Component } from "react";
import "./CredlyCard.css";
import { Fade } from "react-reveal";

class CredlyCard extends Component {
  componentDidMount() {
    // Dynamically load the Credly script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={1000} distance="20px">
        <div
          data-iframe-width="300"
          data-iframe-height="300"
          data-share-badge-id={certificate.credly_id}
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Fade>
    );
  }
}

export default CredlyCard;
