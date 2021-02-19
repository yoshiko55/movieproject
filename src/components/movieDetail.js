import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class MovieDetail extends Component {
    constructor(props) {
        super(props) 
        this.state = { movie: "", poster:""};
  

}
    componentDidMount() {
        axios
            .get(`http://64.225.63.44/movies/${this.props.match.params.id}`)
            .then((response) =>
                this.setState({ movie: response.data, poster: response.data.image }));
    }
    render() {

      
        console.log(this.state.movie)
        const {
            id,
            title,
            actor,
            genre,
            image,
            rating,
            description,
        } = this.state.movie
        return (
            <div>
            <h1>image</h1>
                
          <img
            className=""
            width="300%"
            height="225"
            src={
                this.state.poster === null
              ? "https://imageforproject.nyc3.digitaloceanspaces.com/download.png"
              : `http://64.225.63.44${this.state.poster.url}`}
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
               
                <h1>Title{title}</h1>
                
                <h1>Genre{genre}</h1>
               
                <h1>Actor{actor}</h1>
                
                <h1>rating{rating}</h1>
               
                <p>{description}</p>
                
            </div>
    
             
             
        )
    }
}
 
export default MovieDetail;
//.1.import axios
//.2 call ApI in compoDidMount
//3 store detail in state
//plug in information like title into render method using like text <h1> or<p>