import React, { Component } from 'react';
import one from './one.jpg';
import './App.css';
import Meme from './Meme.js'
import {
  HashRouter,
  Route,
  Link
  
} from 'react-router-dom';
class App extends Component {


  render() {
    return (
      <HashRouter>
      <div className="App">
       <h1>meme</h1>
       <h1>generator</h1>
       <div className="bigBox">
      <Link to='/CreateMeme'><div className="smallBox"><img src={one}/></div></Link> 
       <div className="smallBox"></div>
       <div className="smallBox"></div>
       <div className="smallBox"></div>
       </div>


      <Route path='/CreateMeme' component={Meme} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
