import React from "react";
import {  Container } from "semantic-ui-react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import YaziListesi from "./components/YaziListesi";
import YaziDetayi from "./components/YaziDetayi";
function App() {

  return (
    <Router>
    <div className="main_wrapper">
      <header></header>
      <Container className="post-list ui raised very padded text container segment">
      <Route path="/" exact component={YaziListesi}/>
      <Route path="/posts/:id" component={YaziDetayi}/>
      </Container>
    </div>

    </Router>
  );
}

export default App;
