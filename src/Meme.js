import React, {Component} from 'react';
import App from './App.js';
import './Meme.css';
import{
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
class Meme extends Component {
 
render(){
    return (
        <HashRouter>

<div className="page">

 <div className="box">
 <Link to="/"><div className="xIcon">X</div></Link>
 <div className="tinyBox">
<img src={this.props.imgsrc} alt="meme"/>
 </div>
 </div> 
 <Route path="/" Component={App} />       
</div>
</HashRouter>

    );

}
}
export default Meme ;