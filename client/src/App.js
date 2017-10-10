import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Plan from "./pages/Plan";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Recipe from "./components/Recipe";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:id" component={Recipe} />
        <Route exact path="/plan" component={Plan} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;