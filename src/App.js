
import React from "react";
import "./styles/app.styles.css";

//react router
import {Route, Switch, useLocation} from "react-router-dom";

//animation
import { AnimatePresence } from "framer-motion"; //DETECTS WHEN THE MOUNTED COMPONENT LEAVES THE SCREEN.

//importing pages
import AboutUsPage from "./pages/AboutUsPage";//ABOUT PAGE
import OurWorkPage from "./pages/ourWorkPage";//OUR WORK PAGE
import ContactUsPage from "./pages/contactUsPage";//CONTACT US PAGE
import MovieDetailsPage from "./pages/movieDetailsPage"; //MOVIE DETAILS PAGE

//components
import NavBar from "./components/navBar/nav.component";

function App() {

      const location = useLocation();

  return (

    <div className="App">

          <NavBar/>

            <AnimatePresence>

                        
                  <Switch location = {location} key = {location.pathname}>

                        <Route exact path = "/">
                              <AboutUsPage/>
                        </Route>

                        <Route exact path = "/work">
                              <OurWorkPage/>
                        </Route>

                        <Route  path = "/work/:id">
                              <MovieDetailsPage/>
                        </Route>
                        
                        <Route  path = "/contact">
                              <ContactUsPage/>
                        </Route>
                        
                   </Switch>
                 
            </AnimatePresence>
         

    </div>
  );
}

export default App;


