

import React from "react";

import {motion} from "framer-motion";//framer motion package

import { TextAnimation } from "../../animations";//text animation pulled from animation.js
import { FadeAnimation } from "../../animations";//fade animation
import { PhotoAnimation } from "../../animations";//imageAnimation

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

                            <motion.h2 variants = {TextAnimation} >We work to make </motion.h2>

                        </div>

                        <div className="hide">

                            <motion.h2 variants = {TextAnimation}>Your <span>dreams</span> come</motion.h2>
                        </div>

                        <div className="hide">
                            <motion.h2 variants = {TextAnimation}>True</motion.h2>
                        </div>
                    </div>

                    <motion.p variants = {FadeAnimation}>Contact us for any photography or video ideas you might have.
                        We have professionals with explendid skills.
                    </motion.p>

                    <motion.button variants = {FadeAnimation}>Contact Us</motion.button>
                </div>

                <div className="aboutImage">
                    <motion.img variants = {PhotoAnimation} src= {home1} alt="guy with camera" />
                </div>
        </div>
       
    )
}

export default AboutSection;