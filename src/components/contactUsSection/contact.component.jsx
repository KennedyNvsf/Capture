

import React from "react";

import "../contactUsSection/_contact.style.scss";//styles

//animations
import { motion} from "framer-motion";
import { pageAnimation, TextAnimation, BoxAnimation } from "../../animations";




const ContactUsSection = () => {

    return (

        <motion.div variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit" className ="contactContainer">

            <div className="title">

                <div className="hide">
                    <motion.h2 variants = {TextAnimation}>
                        Get in Touch.
                    </motion.h2>
                </div>


            </div>

            <div className="hide"> 
                <motion.div variants = {TextAnimation} className="socials">
                    <div className="circle"></div>
                    <h2>Send Us a Message</h2>
                </motion.div>
            </div>

            <div className="hide"> 

                <motion.div variants = {TextAnimation} className="socials">
                    <div className="circle"></div>
                    <h2>Send an Email</h2>
                </motion.div>

            </div>

            <div className="hide"> 
                <motion.div variants = {TextAnimation} className="socials">
                    <div className="circle"></div>
                    <h2>Social Media</h2>
                </motion.div>
            </div>
           

        </motion.div>
    )
}

export default ContactUsSection;