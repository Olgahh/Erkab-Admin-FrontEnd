import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const AuthButton = ({ user, logout }) => {
  return user ? (
    <>
      <li className="nav-item">
        <span
          style={{ color: "#008db3", fontSize: "1.2rem" }}
          className="nav-link"
        >
          {user.username}
        </span>
      </li>
      <li className="nav-item">
        <span
          style={{ color: "#008db3", fontSize: "1.2rem" }}
          className="nav-link"
          onClick={logout}
        >
          <ExitToAppIcon color="#008db3" />
        </span>
      </li>
    </>
  ) : (
    <li key="loginButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#008db3", fontSize: "1.2rem" }}
        to="/"
        className="nav-link"
      >
        Login
      </Link>
    </li>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
