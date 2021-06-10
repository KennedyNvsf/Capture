
import React from "react";
import "./styles/app.styles.css";

//react router
import {Route} from "react-router-dom";

//importing pages
import AboutUsPage from "./pages/AboutUsPage";//ABOUT PAGE
import OurWorkPage from "./pages/ourWorkPage";//OUR WORK PAGE
import ContactUsPage from "./pages/contactUsPage";//CONTACT US PAGE
import MovieDetailsPage from "./pages/movieDetailsPage"; //MOVIE DETAILS PAGE

//components
import NavBar from "./components/navBar/nav.component";

function App() {



  return (

    <div className="App">

          <NavBar/>

          <Route exact path = "/">
                <AboutUsPage/>
          </Route>

          <Route exact path = "/work">
                <OurWorkPage/>
          </Route>

          <Route exact path = "/work/:id">
                <MovieDetailsPage/>
          </Route>
         
          <Route exact path = "/contact">
                <ContactUsPage/>
          </Route>

    </div>
  );
}

export default App;


