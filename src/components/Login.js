import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Signin to manage your store's inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login with GitHub
    </button>
    <button className="google" onClick={() => props.authenticate("Google")}>
      Login with Google
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login with Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;