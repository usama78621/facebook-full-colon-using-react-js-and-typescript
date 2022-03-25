import React from 'react';
import Navbar from './conponents/navbar/Navbar'
import './conponents/navbar/Nav.css'
import Leftside from './conponents/main/Leftside';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
      <Leftside/>
      </div>
    </div>
  );
}

export default App;
