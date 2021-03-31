import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        this.setState({ users: response.data.body });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  onDeleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="from-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                key={user._id}
                className="list-group-item list-group-item-action"
                onDoubleClick={() => this.onDeleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
