import React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route path="/"/>
     </Switch>
   </Router>
  );
  
}

export default App;
