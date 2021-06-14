

import React from "react";

import Toggle from "../toggle/toggle.component";

import { AnimateSharedLayout} from "framer-motion";

import "../faqSection/_faqSection.styles.scss";//styles


const FaqSection = () => {

    

    return (
        
        <div className="faq">
            <h2>Any Questions <span>FAQ</span></h2>

            <AnimateSharedLayout>  

                <Toggle title = "How do i start">

                    <div className="answer">
                         <p>Lorem ipsum dolor sit amet.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                    </div>


                </Toggle>

                <Toggle title = "Daily Schedules">

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                    </div>


                </Toggle>


                <Toggle title = "Different Payment Methods">

                    <div className="answer">
                         <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                    </div>


                </Toggle>


                <Toggle title = "Products we Offer">



                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                    </div>


                </Toggle>

            </AnimateSharedLayout>
               
        </div>
    )
}

export default FaqSection;