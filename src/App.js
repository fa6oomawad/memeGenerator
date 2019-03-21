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
constructor(props){
super(props);
this.state={
  img:'',
}
this.handleImgClick=this.handleImgClick.bind(this);

}
//to handle the click on meme so we can reach it src to handle it to the other component
handleImgClick(e){
console.log(e.target);
this.setState({
  img:e.target,
})
}

  render() {
    return (
      <HashRouter>
      <div className="App">
       <h1>meme</h1>
       <h1>generator</h1>
       <div className="bigBox">
      <Link to='/CreateMeme'><div className="smallBox" onClick={this.handleImgClick}><img src={one} alt='meme'/></div></Link> 
       <div className="smallBox"></div>
       <div className="smallBox"></div>
       <div className="smallBox"></div>
       </div>


      <Route path='/CreateMeme' render={(props)=><Meme {...props} img={this.state.img}/>} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
