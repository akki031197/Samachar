
import './App.css';
import LoadingBar from 'react-top-loading-bar'
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
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (  
        <div>
         <Router>
           <NavBar/>
           <LoadingBar
           height={3}
              color='#f11946'
              progress={this.state.progress}
            />
           <Routes>

              <Route exact path="/"  element={ <News setProgress = {this.setProgress}  key="general" pageSize={this.pagSize} country="in" category="general"/>}/>
              <Route exact path="/business"  element={ <News setProgress = {this.setProgress}   key="business" pageSize={this.pagSize} country="in" category="business"/>}/>
              <Route exact path="/entertainment"  element={ <News setProgress = {this.setProgress}   key="entertainment" pageSize={this.pagSize} country="in" category="entertainment"/>}/>
              <Route exact path="/general"  element={ <News setProgress = {this.setProgress}   key="general" pageSize={this.pagSize} country="in" category="general"/>}/>
              <Route exact path="/health"   element={ <News setProgress = {this.setProgress}  key="health" pageSize={this.pagSize} country="in" category="health"/>}/>
              <Route exact path="/science"    element={ <News setProgress = {this.setProgress}  key="science" pageSize={this.pagSize} country="in" category="science"/>}/>
              <Route exact path="/sports"  element={ <News setProgress = {this.setProgress}   key="sports" pageSize={this.pagSize} country="in" category="sports"/>}/>
              <Route exact path="/technology"   element={ <News setProgress = {this.setProgress}  key="technology" pageSize={this.pagSize} country="in" category="technology"/>}/>
 
            </Routes>
     
         
         
         
    
         </Router>
      </div>
    
    )
  }
}

