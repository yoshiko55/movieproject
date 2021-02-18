import React, { Component } from "react";
import axios from "axios";
class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = { title: "", genre:"", actor:"",rating:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this)
                }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post("http://64.225.63.44/movies", {
        title: this.state.title,
            genre: this.state.genre,
            actor: this.state.actor,
            rating: this.state.rating,
        }) .then((response) => console.log(response));
}
    render() {
        return <div className="container">
            <h1>{this.state.title}</h1>
            <form>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2">Movie Title</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            value={this.state.title}
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="genre" className="col-sm-2">Genre</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            value={this.state.genre}
                            type="text"
                            name="genre"
                            id="genre"
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="actor" className="col-sm-2">Actor</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            value={this.state.actor}
                            type="text"
                            name="actor"
                            id="actor"
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="rating" className="col-sm-2">Rating</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            value={this.state.rating}
                            type="text"
                            name="rating"
                            id="rating"
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <button onClick={this.handleSubmit}
                    type="submit"
                    className="btn btn-primary">Add Movie</button>
            </form>
        </div>
    }
  }

export default AddMovie;