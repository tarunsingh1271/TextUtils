import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick =() => {
    let newText= (text.toUpperCase());
    console.log("UpperCase was Clicked");
    setText(newText);
  }
  const handleLoClick =() => {
    let newText= (text.toLowerCase());
    console.log("LowerCase was Clicked");
    setText(newText);
  }
  const handleclClick =() => {
    console.log("ClearText was Clicked");
    setText("");
  }
  const handleonchange =(event) => {
    console.log("Text is changed");
    setText(event.target.value);
  }
  const [text, setText] = useState("");


  return (
<>
<div className="container"> 

        <div className="mb-3" >      
        <label id="my box" className="form-label"> <h2> {props.heading} </h2> </label>
        <textarea className="form-control border border-primary" value = {text} onChange={handleonchange} placeholder='Start here !!' id="my box" rows="3"></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} >UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleclClick} >ClearText</button>
        </div>

        <div className="container">
          <h3>Your text Summary</h3>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>    
        </div>
</div>
</>
  
  )
}
