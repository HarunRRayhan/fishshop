import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Made with{" "}
          <span className="heart_icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>{" "}
          using{" "}
          <img
            src="/images/react.png"
            alt="React.JS"
            className="footer_image react"
          />{" "}
          React and{" "}
          <img
            src="/images/firebase.png"
            alt="Firebase"
            className="footer_image firebase"
          />{" "}
          Firebase by <a href="https://www.harunrrayhan.com">Harun R Rayhan</a>
        </p>
      </div>
    );
  }
}

export default Footer;
