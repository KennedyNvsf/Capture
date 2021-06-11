
//PACKAGES
import React from "react";

import {motion} from "framer-motion";

//animation
import { pageAnimation } from "../animations";

//components
import WorkSection from "../components/workSection/workSection.component"; 



const OurWorkPage = () => {

    return (

        <motion.div variants = {pageAnimation} initial = "hidden" animate = "show" exit = "exit">

            <WorkSection/>
        
        </motion.div>
    )
}

export default OurWorkPage;