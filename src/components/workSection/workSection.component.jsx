//PACKAGES
import React from "react";
import {Link} from "react-router-dom";

import "../workSection/_workSection.styles.scss";

//imported images

import athlete from "../../img/athlete-small.png";
import goodTimes from "../../img/goodtimes-small.png";
import theRacer from "../../img/theracer-small.png";


const WorkSection = () => {

    return (

        <div className = "workContainer">

            <div className="movie">

                <h2>The Athlete</h2>

                <div className="line"></div>

                <Link to = "/work/the-athlete">
                <img src= {athlete} alt="athlete" />
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