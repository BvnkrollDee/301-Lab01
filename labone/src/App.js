import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';                
import Main from './main';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './selectedBeast';


{/*Lines 1 -5 are just importing external files into this file.*/}

function App() {
const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false);
const [currentSelectedBeast, setCurrentSelecetedBeast] = useState(undefined)

let selectedBeastHTML = <SelectedBeast/>
if (displaySelectedBeast === false){
  selectedBeastHTML = <div></div>
}

  return (

    <div className="App">
      <Header/>
      {/* {displaySelectedBeast === true ? <selectedBeast/> : <></>} */}
      {displaySelectedBeast === true ? <SelectedBeast currentSelectedBeast={currentSelectedBeast} updateFunction={setDisplaySelectedBeast}/> : <></>}   {/*this is my comment*/}
      <Button onClick = {() => {
        if(displaySelectedBeast === true){
          setDisplaySelectedBeast(false)
        }else{
          setDisplaySelectedBeast(true)
        }
      }
      }>Display Beast</Button>
      <Main updateFunction={setDisplaySelectedBeast} beastUpdateFunction={setCurrentSelecetedBeast}/>
      <Footer/>
    </div>
  );
}

export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}