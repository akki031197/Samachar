
import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (  
        <div>
         <Router>
           <NavBar/>
           <Routes>

              <Route exact path="/"  element={ <News key="general" pageSize={this.pagSize} country="in" category="general"/>}/>
              <Route exact path="/business"  element={ <News  key="business" pageSize={this.pagSize} country="in" category="business"/>}/>
              <Route exact path="/entertainment"  element={ <News  key="entertainment" pageSize={this.pagSize} country="in" category="entertainment"/>}/>
              <Route exact path="/general"  element={ <News  key="general" pageSize={this.pagSize} country="in" category="general"/>}/>
              <Route exact path="/health"   element={ <News key="health" pageSize={this.pagSize} country="in" category="health"/>}/>
              <Route exact path="/science"    element={ <News key="science" pageSize={this.pagSize} country="in" category="science"/>}/>
              <Route exact path="/sports"  element={ <News  key="sports" pageSize={this.pagSize} country="in" category="sports"/>}/>
              <Route exact path="/technology"   element={ <News key="technology" pageSize={this.pagSize} country="in" category="technology"/>}/>
 
            </Routes>
     
         
         
         
    
         </Router>
      </div>
    
    )
  }
}

