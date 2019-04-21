import React, { Component } from 'react';
import './App.css';
import Meme from './Meme.js'
import 'font-awesome/css/font-awesome.min.css';

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
  data:[]
}
this.handleImgClick=this.handleImgClick.bind(this);
this.fetchingMemes=this.fetchingMemes.bind(this);
this.handleMouseEnter=this.handleMouseEnter.bind(this);
this.handleMouseOut=this.handleMouseOut.bind(this);
this.handleSource=this.handleSource.bind(this);
}

componentDidMount(){
  this.fetchingMemes();
}
fetchingMemes(){
  
  const encodedURI=encodeURI(`https://api.imgflip.com/get_memes`)
  return fetch(encodedURI)
  .then((data)=>data.json())
  .then((repos)=>this.setState({data:repos.data.memes})
  
)
.catch((error)=>{
  console.warn(error)
  return null 
});
}
componentDidUpdate(){
  console.log('update',this.state.data)
}


//to handle the click on meme so we can reach it src to handle it to the other component
handleImgClick(e){
console.log(e.target);
this.setState({
  img:e.target,
})
}
handleMouseEnter(e){
const box= e.currentTarget;
box.classList.add('beSmaller');
}
handleMouseOut(e){
  const box= e.currentTarget;
  box.classList.remove('beSmaller')
}
handleSource(){
  const githubP= document.querySelector('.githubCode p');
  console.log(githubP)

  
  githubP.style.right='8%';
  githubP.style.display='inline'
}

  render() {
    return (
      <HashRouter>
      <div className="App">
      <div className='titleBox'>
      <h1 className="title">MEME <br/> GENERATOR</h1>
      </div>
      <div className='githubCode'>
                <a href="https://github.com/fa6oomawad/Todo-list">
                <i className="fab fa-github" onMouseOver={this.handleSource}>
                </i></a>
            <p>check the source code</p>


         </div>
       <div className="bigBox">
      
       {this.state.data
       .filter((meme)=>meme['box_count']===2)
       .map((meme)=>{
         return ( 
         <Link to='/CreateMeme' key={meme.id}>
         <div className="smallBox" onClick={this.handleImgClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseOut}>
         <img crossOrigin= 'anonymous' src={meme.url} alt='meme'/>
         </div>
         </Link> 
         )
       })}

       

       </div>



      <Route path='/CreateMeme' render={(props)=><Meme {...props} img={this.state.img}/>} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
