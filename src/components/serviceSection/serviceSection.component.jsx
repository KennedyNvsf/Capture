
import React from "react";

import "./_serviceSection.styles.scss";//styles

//importing icons 
import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";

//imported images
import home2 from "../../img/home2.png"

const ServiceSection = () => {

    return (

        <div className = "services">

            <div className="servicesImage">
                <img src= {home2} alt=""/>
            </div>

            <div className="servicesText">
                <h2>
                    <span>High </span><span>Quality</span> Services
                </h2>

                <div className="cards">

                    <div className="cardBlocks">

                        <div className="icons">
                            <img src= {clock} alt=""/>
                            <h3>efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                    <div className="cardBlocks">

                        <div className="icons">
                            <img src= {teamwork} alt=""/>
                            <h3>teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        
                    </div>

                    <div className="cardBlocks">

                        <div className="icons">
                            <img src= {diaphragm} alt=""/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                    <div className="cardBlocks">

                        <div className="icons">
                            <img src= {money} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection;