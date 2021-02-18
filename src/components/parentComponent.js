import React, { Component } from 'react';
import axios from 'axios';
import CardComponent from './cardComponent';
import Pagination from './pagination';
import { movieSelect } from "../util/movieselect";
import ButtonGroup from "./buttonGroup";
import About from "./about";
import MovieDetail from "./movieDetail";
import { Link } from "react-router-dom";
class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            moviesOnPage: 4,
            currentPage: 1,
            allGenres: [],
            currentGenre:"",
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleGenreSelect = this.handleGenreSelect.bind(this);
    }
    handlePageChange(page) {
        console.log(page);
        this.setState({ currentPage: page });
    }
    handleGenreSelect(g) {
        console.log("This is Genre", g);
        this.setState({ currentGenre: g });
        
    }
    getGenres(movies) {
       
        const allGenres = movies.map((m) => m.genre);
        const uniqueGenres = ["All Genre", ...new Set(allGenres)];
        console.log("Genres",uniqueGenres);
        this.setState({ allGenres: uniqueGenres });
    }
    componentDidMount() {
        axios
            .get("http://64.225.63.44/movies")
            .then((response) =>
                this.setState({ movies: response.data },this.getGenres(response.data))
            );
}
      render() { 
        const { movies, currentPage, moviesOnPage,currentGenre } = this.state;
        const filteredMovies =
            currentGenre && currentGenre !== "All Genre"
                ? movies.filter((m) => m.genre === currentGenre) 
                : movies;
        console.log("Filtered", currentGenre, filteredMovies);
        const newmovies = movieSelect(filteredMovies, currentPage, moviesOnPage);
        return(
            <div className="album py-5 bg-light"  >
                <ButtonGroup Click={this.handleGenreSelect}
                selectGenre = { this.state.currentGenre }
                genres={this.state.allGenres}
                />
             <div className="container">
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {newmovies.map((m) => (
                
                  <CardComponent
                    key={m.id}
                    movie={m}
                    handleMethod={this.handlePageChange}/>
                  
                ))}
             </div>
                <Pagination
                        numberOfMovies={filteredMovies.length}
                        moviesOnPage={this.state.moviesOnPage}
                        pageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                
            </div >
         </div>
        );
    }
}

export default ParentComponent;