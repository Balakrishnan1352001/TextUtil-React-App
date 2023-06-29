import React , {useState} from 'react'


export default function TextForm(props) {
const [text, setText] = useState("");
// text = "new text";  // wrong way to update text 
// setText ("new text");  // correct way to update text

// const handleUpTitle =()=> {
//   // console.log("Upper Case Clicked" +text);
//   let newText = text.split(' ')
//   .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
//   .join(' ') ;
//   setText (newText);
// }


const handleUpClick =()=> {
    // console.log("Upper Case Clicked" +text);
    let newText = text.toUpperCase();
    setText (newText);
    props.showAlert("Converted to UpperCase" , "success");
}

const handlelwClick =()=> {
    // console.log("lower Case Clicked" +text);
    let newText = text.toLowerCase();
    setText (newText);
    props.showAlert("Converted to LowerCase" , "success");

}

const handleclickclear =()=> {
  // console.log("Text cleared" +text);
  let newText = ("");
  setText (newText);
  props.showAlert("Text cleared" , "success");

}

const handlecopy =()=> {
  // console.log("Text Copied" +text);
  // var text = document.getElementById("myBox")
  // text.select();
  // text.setSelectionRange(0 , 9999);
  // document.getSelection().removeAllRanges();
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied" , "success");

}


const handleextraspace =()=> {
  let newText =  text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Removed extra space" , "success");

}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Textspeaking Started" , "success");

}



const handleOnChange =(event)=> {
    // console.log("On Change ");
    setText (event.target.value); // help to type more words apart from setText
    
}

  return (
    <>
<div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'#13466e':'white' , color: props.mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter Text Here"></textarea>
    </div>
    {/* <button className="btn btn-primary mx-2" onClick={handleUpTitle} >First Word Capital</button> */}
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to upper case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelwClick} >Convert to lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclickclear} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleextraspace} >Remove Extra Space</button>
    <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2">Speak</button>


</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}  >
  <h2>Your Text Summary</h2>
  <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Characters and {text.split('\n').length} Line Count </p>
  {/* <p> {text.trim() === '' ? 0 : text.match(/\S+/g).length} Words , {text.length} Characters and {text.split('\n').length} Line Count </p> */}

  <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview "}</p>
</div>
</>

  )
}


