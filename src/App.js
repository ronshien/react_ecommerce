import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = props => {
  console.log(props);
  return <div>HATS</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
