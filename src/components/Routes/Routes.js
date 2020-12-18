import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = () => {
   return (
      <Router>
         <Switch>
            <Route path="/login">
               <Login />
            </Route>

            <PrivateRoute path="/">
               <Home />
            </PrivateRoute>
         </Switch>
      </Router>
   );
};

export default Routes;
