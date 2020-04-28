import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { login } from "../store/actions";
// import { Redirect } from "react-router-dom";

import "../App.css";
import bus from "../images/bus.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { username, password } = this.state;
    // if (this.props.user) return <Redirect to="/" />;
    return (
      <div>
        <div className="container mt-5">
          <div className="image">
            <div className="col-6 mx-auto">
              <div className="card my-5">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-info">
                      Login
                    </button>
                    <Link
                      style={{ color: "#ffc107" }}
                      to="/signup"
                      className="btn btn-link my-2 my-sm-0"
                    >
                      Signup for an account
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <img className="image" src={bus} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
