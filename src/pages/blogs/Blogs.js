import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Blogs.css";
import BlogsImg from "../contact/BlogsImg";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import { contactPageData } from "../../portfolio";

const blogSection = contactPageData.blogSection;

class Blogs extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="blogs-main">
        <Header theme={this.props.theme} />
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <Button
                  text="Visit My Blogsite"
                  newTab={true}
                  href={blogSection.link}
                  theme={theme}
                />
              </div>
            </div>
            <div className="blog-heading-img-div">
              {/* <img
											src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        {/*         <Organizations theme={this.props.theme} />
         */}{" "}
        {/*         <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} /> */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Blogs;
