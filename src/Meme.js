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
        this.state={
            upperText:''
        }
        this.displayImgOnCanvas=this.displayImgOnCanvas.bind(this);
        this.writeTextOnTop=this.writeTextOnTop.bind(this);
    }
 componentDidMount(){
    this.displayImgOnCanvas();

 }
//function to take the chosen image and put it on canvas

 displayImgOnCanvas(){
    var canvas=document.querySelector('.tinyBox2');
    var ctx=canvas.getContext('2d');
    var img = this.props.img;

ctx.drawImage(img, 0, 0, img.width,    img.height,    
    0, 0, canvas.width, canvas.height);
    //ctx.fillStyle="rgba(255, 255, 255, 0)";
    ctx.fillStyle='blue';
    ctx.fillRect(0,0,canvas.width,80);
    ctx.fillStyle='red';
    ctx.fillRect(0,90,canvas.width,90) ;



    
}

//function to write on the upper side of the img;
writeTextOnTop(e){
    var canvas=document.querySelector('.tinyBox2');
    var ctx=canvas.getContext('2d');
    var img = this.props.img;
    //every time change happen in text clear the written so it dosent get over each other and make blurry
    if(e.target.id==='upperText'){
    ctx.clearRect(0,0,canvas.width,80);
    ctx.drawImage(img, 0,0, img.width,    img.height,    
        0, 0, canvas.width, canvas.height);
    console.log('clear happen to up');
  
    }
    else{
        ctx.clearRect(0,90,canvas.width,90);  
        console.log('clear happen to down!!');
        ctx.drawImage(img, 0,0, img.width,    img.height,    
            0, 0, canvas.width, canvas.height);
    }
    
    //meme popular font styling
   ctx.fillStyle="white";
    ctx.font="23px Impact";
    ctx.strokeStyle="black";
    ctx.textAlign='center';
    if(e.target.id === 'upperText'){
    ctx.strokeText(e.target.value,canvas.width/2,30);
    ctx.fillText(e.target.value,canvas.width/2,30);
    }
    else{
        ctx.strokeText(e.target.value,canvas.width/2,130);
        ctx.fillText(e.target.value,canvas.width/2,130);
    }


  

    



}

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
     <input type='text' placeholder='Enter your Text' id="upperText" onKeyUp={this.writeTextOnTop}></input>
 </div>

 <div className="lower">
     <span>Lower Text</span>
     <input type='text' placeholder='Enter your Text' id="lowerText" onKeyUp={this.writeTextOnTop}></input>
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