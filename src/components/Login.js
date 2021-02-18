import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event){
            this.setState({ [event.target.name]: event.target.value });
     }
    handleSubmit(event) {
        event.preventDefault();
        
        axios.post("http://64.225.63.44/auth/local", {
            identifier: this.state.email,
            password: this.state.password,
        })
            .then((response) => localStorage.setItem("token", response.data.jwt))
            .then(this.props.history.push("/"));
    }

    render() {
        return (
         <div className="text-center m-5">
                <h1>
                    {this.state.email}
                    {this.state.password}
                
                </h1>
                
        <main className ="row justify-content-center align-self-center
                 form-signin">
        <form style={{ width: 330, height:300 }}>
            <label htmlFor="inputEmail" className="visually-hidden">
                Email address
            </label>
                <input
                className="form-control"
                value={this.state.email}
                type="text"
                name="email"
                onChange={this.handleChange}
                      />
            <label htmlFor="password" className="col-sm-2">
                            password
            </label>
                <input
                className="form-control"
                value={this.state.password}
                type="text"
               name="password"
                onChange={this.handleChange}
                />
            <button onClick={this.handleSubmit}
                className="w-100 btn btn-lg btm-primary m-2" type="submit">
                Login
            </button>
         </form>
        </main>
            </div >
            );
            }
            }
             
    export default Login;

    
    
        