//PACKAGES
import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

import "../workSection/_workSection.styles.scss";

//imported images

import athlete from "../../img/athlete-small.png";
import goodTimes from "../../img/goodtimes-small.png";
import theRacer from "../../img/theracer-small.png";

//animation
import { FadeAnimation, PhotoAnimation, LineGlideAnimation} from "../../animations";


const WorkSection = () => {

    return (

        <div className = "workContainer">

            <div className="movie">
                 
                <motion.h2 variants = {FadeAnimation}>The Athlete</motion.h2>

                <motion.div variants = {LineGlideAnimation} className="line"></motion.div>

                <Link to = "/work/the-athlete">

                    <div className = "fst">
                    <motion.img variants = {PhotoAnimation} src= {athlete} alt="athlete" />
                    </div>
              
                </Link>

            </div>

            <div className="movie">

                <h2>The Racer</h2>

                <div className="line"></div>

                <Link to = "/work/the-racer">
                <img src= {theRacer} alt="theracer" />
                </Link>

            </div>

            <div className="movie">

                <h2>Good Times</h2>

                <div className="line"></div>

                <Link to = "/work/good-times">
                <img src= {goodTimes} alt="gootTimes" />
                </Link>

            </div>

            

        
        </div>
    )
}

export default WorkSection;