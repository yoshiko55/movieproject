import React, { Component } from "react";
import StarRating from "./starRating";
import MovieDetail from './movieDetail';
import { Link } from "react-router-dom";
class CardComponent extends Component {
  
    render() {
        const { id,title, image, rating } = this.props.movie;
        console.log(this.props.movie);
    return (
      <div className="col m-2">
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={image === null
              ? "https://imageforproject.nyc3.digitaloceanspaces.com/download.png"
              : `http://64.225.63.44${image.url}`}
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <div classaName="card-body">
            <p classaName="card-text">
                        {title}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to={`/detail/${id}`}>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Details
                </button>
                </Link>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small className="text-muted">
                <StarRating rating={rating} /></small>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardComponent;