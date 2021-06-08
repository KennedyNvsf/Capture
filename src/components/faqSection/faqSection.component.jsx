

import React from "react";

import "../faqSection/_faqSection.styles.scss";//styles


const FaqSection = () => {

    return (
        
        <div className="faq">
            <h2>Any Questions <span>FAQ</span></h2>

            <div className="questionBlocks">

                <h4>How Do I Start </h4>
                <div className="answer">
                     <p>Lorem ipsum dolor sit amet.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                </div>

            </div>

            <div className="questionBlocks">

                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                </div>

            </div>
            
            <div className="questionBlocks">

                <h4>Different Payment Methods </h4>
                <div className="answer">
                     <p>Lorem ipsum dolor sit amet.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                </div>

            </div>

            <div className="questionBlocks">

                <h4>What products do you offer </h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus.</p>
                </div>

            </div>
        </div>
    )
}

export default FaqSection;