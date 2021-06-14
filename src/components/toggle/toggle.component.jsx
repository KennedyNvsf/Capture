

import React, {useState} from "react";
import { motion} from "framer-motion";





const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);



    return(
        <motion.div layout className = "questionBlocks" onClick = {() => setToggle(!toggle)}>
            
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}

        </motion.div>
    )
}

export default  Toggle;