import React, { useState } from 'react';

export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase!", "success")

    }

    
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase!", "success")

    }
  
    

    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    //
    const handlecopy = () =>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipbord", "success")

    }

    //
     const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed!", "success")

     }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white'}}id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert To lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Chacrecters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minuits read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

