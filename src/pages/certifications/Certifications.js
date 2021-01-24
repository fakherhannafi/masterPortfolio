import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Certifications.css";
import ProfCerts from "../../containers/prof-certs/Prof-certs";

class Certifications extends Component {
  render() {
    return (
      <div className="certifications-main">
        <Header theme={this.props.theme} />
        <ProfCerts theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Certifications;
