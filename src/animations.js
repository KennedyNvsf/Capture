



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
        y: 300,
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