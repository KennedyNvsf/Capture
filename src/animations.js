



export const pageAnimation = {

    hidden: {

        opacity: 0,
        y: 300,
      

    },

    show: {

        opacity: 1,
        y: 0,
        transition: {duration: 0.5},
        when: "beforeChildren",
        staggerChildren: 1.5,
       
    },

    exit: {

        opacity: 0,
        // y: 300, to slide down on exit
        transition: {duration: 0.5}
    }

};

export const TextAnimation = {

    hidden: {

        y: 200
    
    },

    show: {

        y: 0,
        transition: {duration: 2, ease: "easeOut"},
        
    }
}


export const FadeAnimation = {

    hidden:{

        opacity:0,
        
    },

    show: {

        opacity:1,
        transition: {duration: 2, ease: "easeOut"}
    }
}

export const PhotoAnimation = {

    hidden: {
        opacity: 0,
        scale: 1.5,
    },

    show: {

        opacity: 1,
        scale: 1,
        transition: {

            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const LineGlideAnimation = {

    hidden: {

        width: "0%", //if you want to use pixels instead of percentages then you wont need the quotes

    },

    show: {
        width: "100%",
        transition: {duration: 1.5}
    }
}

export const FrameAnimation = {

    hidden: {

        x: "-130%",
        skew: "45deg"
    },

    show: {

        x: "100%",
        skew: "0deg",
        transition: {duration: 1, ease: "easeOut"},
        
    }
}