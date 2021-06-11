

import React from "react";

import {motion} from "framer-motion";

import "./_aboutSection.styles.scss";//styles

//images
import home1 from "../../img/home1.png";



const AboutSection = () => {

    //ANIMATIONS

    

    return(

        <div className = "aboutContainer">
             
                <div className ="aboutText">

                    <div className="title">

                        <div className="hide">

                            <h2>We work to make </h2>

                        </div>

                        <div className="hide">

                            <h2>Your <span>dreams</span> come</h2>
                        </div>

                        <div className="hide">
                            <h2 >True</h2>
                        </div>
                    </div>

                    <p>Contact us for any photography or video ideas you might have.
                        We have professionals with explendid skills.
                    </p>

                    <button>Contact Us</button>
                </div>

                <div className="aboutImage">
                    <img src= {home1} alt="guy with camera" />
                </div>
        </div>
       
    )
}

export default AboutSection;