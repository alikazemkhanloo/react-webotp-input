import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactWebOTPInput from 'react-webotp-input';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ReactWebOTPInput numberOfdigits={6} value={value} onChange={setValue} />
      </header>
    </div>
  );
}

export default App;
