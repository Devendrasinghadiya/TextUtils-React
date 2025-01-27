import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from '../components/Navbar';
import Textform from '../components/Textform';
import About from '../components/About';
import Alert from '../components/Alert';

// import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Wheather dark mode is enabled or not
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type                   
    }) 
     setTimeout(() => {
    setAlert(null)
  },1500);

  };

   const toggleMode = () => {
    if(mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
    localStorage.setItem('mode', 'dark');
    // setInterval(() => {
    //   document.title ="TextUtils is amazing mode";
    // },2000)
    // setInterval(() => {
    //   document.title ="Install TextUtils Now";
    // },1500)
  } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      localStorage.setItem('mode', "light");
    }
    };

    React.useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
      if(savedMode === 'light'){
        document.body.style.backgroundColor = 'white';
      } else {
      document.body.style.backgroundColor = '#042743';
    }
  }
    }, []);


//   const toggleMode = () => {
//   const newMode = mode === "light" ? "dark" : "light";
//   setMode(newMode);
//   document.body.style.backgroundColor = newMode === "dark" ? "#042743" : "white";
//   showAlert(newMode === "dark" ? "Dark mode has been enabled" : "Light mode has been enabled", "success");
//   document.title = `TextUtils - ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`;
//   localStorage.setItem('mode', newMode);
// };

// React.useEffect(() => {
//   const savedMode = localStorage.getItem('mode');
//   if (savedMode) {
//     setMode(savedMode);
//     document.body.style.backgroundColor = savedMode === 'light' ? 'white' : '#042743';
//   }
// }, []);




  return (
     <>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} setMode={setMode} toggleMode={toggleMode}></Navbar>
   {/* <Navbar/> */}
   <Router> 
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
   </Routes>
 </div>
</Router>             
 </>
  );
}

export default App
