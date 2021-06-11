
import React from "react";

import {motion} from "framer-motion";

//animation
import { pageAnimation } from "../animations";

//components
import MovieDetailSection from "../components/movieDetailSection/movieDetailSection.components";


const MovieDetailsPage = () =>{

   
  
    return (

        <motion.div variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit">

            <MovieDetailSection/>
            
        </motion.div>

    )
};

export default MovieDetailsPage;