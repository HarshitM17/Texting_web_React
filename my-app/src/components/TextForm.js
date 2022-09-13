import React, { useState } from 'react';

export default function TextForm(props) {
    const clickUp=()=>{
        console.log("Uppercase was clicked"+text);
        let my_upper=text.toUpperCase();
        setText(my_upper);
    }
    const clickdown=()=>{
        console.log(" Lowercase was clicked"+text);
        let my_upper=text.toLowerCase();
        setText(my_upper);
    }

    const clickout=()=>{
        console.log(" Cleared the text-> "+text);
        let clear="";
        setText(clear);
    }

    const changeup=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    let mycolors={
        color :"red",
        backgroundColor :"pink"
    }

    const [text, setText] = useState("");
    
    return (
    <>
    <div className="container" style={mycolors}>
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="my_Box" class="form-label"></label>
            <textarea className="form-control" value={text} placeholder="Enter Your text Here!!" onChange={changeup} id="my_Box" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickUp}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clickdown}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clickout}>Clear Text</button>
    </div>
    <div>
    <h1>Here is the legnth of the text</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} time to read each word</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </div>
    </>
  )
}
