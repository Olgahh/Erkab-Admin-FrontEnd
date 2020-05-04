import React, { Component } from "react";
import { connect } from "react-redux";
import { postSchool } from "../store/actions";
import { Redirect } from "react-router-dom";
import LocationPicking from "./LocationPicking";
class SchoolForm extends Component {
  state = {
    name: "",
    image: "",
    lat: "",
    lng: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handlePosition = ({ lat, lng }) => this.setState({ lat: lat, lng: lng });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postSchool(this.state, this.props.history);
  };
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    const { name, image, lat, lng } = this.state;
    return (
      <div className="text-center container">
        <div className="image ">
          <div className="col-6 mx-auto">
            <div className="card my-5">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="school_name">School Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      name="name"
                      placeholder="School name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageUrl">Image Url</label>{" "}
                    {/* Why not handle actual image files, rather than image URLs? */}
                    <input
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      value={image}
                      name="image"
                      placeholder="imageUrl"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                      type="text"
                      className="form-control"
                      id="latitude"
                      value={lat}
                      name="lat"
                      placeholder="latitude"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="longtitude">Longtitude</label>
                    <input
                      type="text"
                      className="form-control"
                      id="longtitude"
                      value={lng}
                      name="lng"
                      placeholder="longtitude"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-info">
                    ADD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <LocationPicking handlePosition={this.handlePosition} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postSchool: (newSchool, history) =>
      dispatch(postSchool(newSchool, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolForm);
