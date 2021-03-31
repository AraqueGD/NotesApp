import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    this.getUsers();
    if (this.props.match.params.id) {
      const res = await axios.get(
        `http://localhost:4000/api/notes/${this.props.match.params.id}`
      );
      this.setState({
        title: res.data.body.title,
        content: res.data.body.content,
        // date: new Date(res.data.body.date),
        userSelected: res.data.body.author,
        editing: true,
        _id: this.props.match.params.id,
      });
    }
  }

  getUsers = async () => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        this.setState({
          users: response.data.body,
          userSelected: response.data.body[0].username,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };
    if (this.state.editing) {
      await axios.put(
        `http://localhost:4000/api/notes/${this.state._id}`,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create a Note</h4>

            {/** SELECT USER */}
            <div className="from-group">
              <select
                name="userSelected"
                id="userSelected"
                className="form-control"
                onChange={this.onInputChange}
                value={this.state.userSelected}
              >
                {this.state.users.map((user) => (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                required
                name="title"
                onChange={this.onInputChange}
                value={this.state.title}
              />
            </div>

            <div className="form-group">
              <textarea
                name="content"
                className="form-control"
                placeholder="Content"
                onChange={this.onInputChange}
                required
                value={this.state.content}
              ></textarea>
            </div>

            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
                value={this.state.date}
              />
            </div>

            <form onSubmit={this.onSubmit}>
              <button type="submit" className="btn btn-primary">
                Save Note
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
