// import React, { useState } from 'react'
// import { useFormState } from 'react-dom'

// export default function About() {

//      const [myStyle, setMyStyle] = useState({
//         color: 'white',
//         backgroundColor: 'black',
//         border: "1px solid white"
//      })
//      const [btntext,setBtnText] = useState("Enable light Mode")
     
//     const toggleStyle = () => {
//         if(myStyle.color === 'white'){
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor:'white'
//             })
//             setBtnText("Enable dark Mode")
//         }
//         else{
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor:'black'
//             })
//             setBtnText("Enable light Mode")
//         }
//      }
     
     



//   return (
//     <div className="container" style={myStyle}>
//         <h2 className='my3'>About Us</h2>
//       <div className="accordion" id="accordionExample" style={myStyle}>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body" style={myStyle}>
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
// </div>
// <div className="container my-3">
//     <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
     
// </div>
//     </div>
//   )
// }


import React, { useState } from 'react';

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const darkModeStyle = {
    backgroundColor: '#333',
    color: '#fff',
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> 
              {/* ... (rest of the accordion body content) */}
            </div>
          </div>
        </div>
        {/* ... (rest of the accordion items) */}
      </div>
      <div className="container my-3">
        <button onClick={toggleMode} type="button" className="btn btn-primary">
          {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </button>
      </div>
    </div>
  );
}