


import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

//imported pacakges
import Awards from "../awards/award.component";
import "../movieDetailSection/_movieDetail.styles.scss";//styles






//imported states

import {MovieState} from "../../MovieState";


const MovieDetailSection = () => {

      const history = useHistory();
      const url = history.location.pathname;

      //STATES
      const [movies, setMovies] = useState(MovieState);
      const [movie, setMovie] = useState(0);
  
      useEffect(() => {
  
          const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
          setMovie(currentMovie[0]);
  
      }, [movies, url]);

      
      return (
            
        <div>
        {movie &&  (
            <div className="detailsContainer">

                <div className="headline">

                    <h2> {movie.title} </h2>
                    <img src= {movie.mainImg} alt=""/>

                </div>

                <div className="awardContainer">

                   {movie.awards.map((award) => (
                        <Awards title = {award.title} description = {award.description} key = {award.title} />
                    ))}

                </div>

                <div className="imageDisplay">
                    <img src= {movie.secondaryImg} alt="img" />
                </div>
         
            </div>

        )}
        </div>    

      )


}

export default MovieDetailSection;