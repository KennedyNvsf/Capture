

import React from "react";

import "../awards/_award.styles.scss";





const Awards = ({title, description}) => {

    return (

        

        <div className="awardBlocks">
             <h3>{title}</h3>
             <div className="line"></div>
            <p>{description}</p>
         </div>
        
    )
}

export default Awards;