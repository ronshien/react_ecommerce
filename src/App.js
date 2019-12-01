import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignupPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
