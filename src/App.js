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
  data:[]
}
this.handleImgClick=this.handleImgClick.bind(this);
this.fetchingMemes=this.fetchingMemes.bind(this);
}

componentDidMount(){
  this.fetchingMemes();
}
fetchingMemes(){
  const encodedURI=encodeURI(`http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&apiKey=7ca1ef06-a4d3-46ca-8d9c-78533b6b5e78`)
  return fetch(encodedURI)
  .then((data)=>data.json())
  .then((repos)=>{
    this.setState({data:repos.result})
  }
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

  render() {
    return (
      <HashRouter>
      <div className="App">
      <div className='titleBox'>
      <h1 className="title">MEME <br/> GENERATOR</h1>
      </div>
     
       <div className="bigBox">
      
       {this.state.data.map((meme)=>{
         return ( 
         <Link to='/CreateMeme'>
         <div className="smallBox" onClick={this.handleImgClick}><img src={meme.imageUrl} alt='meme'/>
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
