

import React from "react";
import {motion} from "framer-motion";

//animation
import { pageAnimation } from "../animations";

//components
import AboutSection from "../components/aboutSection/aboutSection..component";
import ServiceSection from "../components/serviceSection/serviceSection.component";
import FaqSection from "../components/faqSection/faqSection.component";



const AboutUsPage = () => {

    return(

        <motion.div variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit">

            <AboutSection/>
            <ServiceSection/>
            <FaqSection/>
            
        </motion.div>
    )
    
}

export default AboutUsPage;