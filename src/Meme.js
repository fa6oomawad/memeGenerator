import React, {Component} from 'react';
import App from './App.js';
import './Meme.css';
import{
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
class Meme extends Component {
    constructor(props){
        super(props);
        this.displayImgOnCanvas=this.displayImgOnCanvas.bind(this)
    }
 componentDidMount(){
    this.displayImgOnCanvas();
    console.log('ola')

 }

 displayImgOnCanvas(){
var canvas=document.querySelector('.tinyBox2');
var ctx=canvas.getContext('2d');
var img = this.props.img;

ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
    0, 0, canvas.width, canvas.height); }
render(){
    return (
        <HashRouter>

<div className="page">

 <div className="box">
 <Link to="/"><div className="xIcon">X</div></Link>
 <div className="tinyBox">
 <canvas className='tinyBox2'>

 </canvas>

 </div>

 <div className="upper">
     <span>Upper Text</span>
     <input type='text' placeholder='Enter your Text' id="upperText"></input>
 </div>

 <div className="lower">
     <span>Lower Text</span>
     <input type='text' placeholder='Enter your Text' id="lowerText"></input>
 </div>
 <div className="download">
 <button>Download</button>
 </div>
 </div> 
 <Route path="/" Component={App} />       
</div>
</HashRouter>

    );

}
}
export default Meme ;