// // import React from 'react'

// // export default function Textform(props) {
// //   return (
// //     <div>
// //       <form>
// //       <h1>{props.heading}</h1>
// //   <div className="mb9">
// //     {/* <label for="mybox" className="form-label"></label> */}
// //     {/* <input type="text" className="form-control" id="mybox" aria-describedby="emailHelp"/> */}
// //     <textarea name="form-control" id="mybox" rows="8"></textarea>
    
// //   </div>
// //   {/* <div className="mb-3">
// //     <label for="exampleInputPassword1" className="form-label">Password</label>
// //     <input type="password" className="form-control" id="exampleInputPassword1"/>
// //   </div>
// //   <div className="mb-3 form-check">
// //     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
// //     <label className="form-check-label" for="exampleCheck1">Check me out</label>
// //   </div>
// //   <button type="submit" className="btn btn-primary">Submit</button> */}
// // </form>
// //     </div>
// //   )
// // }







// // import React, {useState} from 'react';

// // export default function TextForm(props) {
// //   const handleUpClick = ()=> {
// //     console.log("UpperCase was clicked")
// //   }


// //   const [text, setText] = useState('Enter text here');
// //   // text = "new text" //wrong way to change the state
// //   //setText("new text"); //Correct way to change the state

// //   return (
// //     <div className="container my-4">
// //       <form>
// //         <h1>{props.heading}</h1>
// //         <div className="mb-3">
// //           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Type your text here..."></textarea>
// //         </div>
// //       </form>
// //       <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';


// export default function TextForm(props) {
//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//     console.log("UpperCase was clicked");
//     props.showAlert("Converted to Uppercase!","success");
//   };
//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//     console.log("LowerCase was clicked");
//     props.showAlert("Converted to Lowercase!","success");
//   };
//   const handleClearClick = () => {
//     let newText = ""
//     setText(newText)
//     props.showAlert("Text Cleared!","success");

//   };

//   const handleCopy = () => {
//     console.log("I am copy");
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//     props.showAlert("Copied to Clipboard !","success");

    
//   };

//   const handleExtraSpaces = () => {
//     let newText = text.split(/[ ]+/);
//     setText(newText.join(" "))
//   };
//   const FirstWordCapital = () => {
//     let newText = text
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
//     setText(newText);
//     props.showAlert("First charcter of each word capitalized!","success");
//   };


//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const [text, setText] = useState('');
  
//   return (
//     <>   
//     <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter Text here'></textarea>
//       </div>
//       <button className="btn btn-primary mx-2" type="button" onClick={handleUpClick}>Convert to UpperCase</button>
//       <button className="btn btn-primary mx-2" type="button" onClick={handleLoClick}>Convert to LowerCase</button>
//       <button className="btn btn-primary mx-2 mb-2 mb-md-0" type="button" onClick={handleClearClick}>Clear Text</button>
//       <button className="btn btn-primary mx-2 mb-2" type='button' onClick={handleCopy}>Copy Text</button>
//       <button className='btn btn-primary mx-2 mb-2' type='button' onClick={handleExtraSpaces}>RomoveExtraSpaces</button>
//       <button className='btn btn-primary mx-2 mb-2' type='button' onClick={FirstWordCapital}>FirstWordCapital</button>


//     </div>
//     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
//       <h1>Your text summary </h1>
//       <p>{text.split(" ").length} words and {text.length}</p>
//       <p> {0.008 * text.split(" ").length} Minutes read</p>
//       <h2>Preview</h2>
//       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
//     </div>
//     </>
//   );
// }

import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("UpperCase was clicked");
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log("LowerCase was clicked");
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    console.log("I am copy");
    try {
      const text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
    } catch (err) {
      console.error("Error copying text:", err);
      props.showAlert("Failed to copy text!", "danger"); // Or a more user-friendly message
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const FirstWordCapital = () => {
    let newText = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert("First character of each word capitalized!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="8"
            placeholder="Enter Text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" type="button" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" type="button" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 mb-2 mb-md-0" type="button" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 mb-2" type="button" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 mb-2" type="button" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              </div>
              <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
              </div>
            </>
          );
        }