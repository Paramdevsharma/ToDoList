import React from 'react';
import An from './an';
import './App.css';

function Aant() {

  const fun = () => {
    return (
      <An  name = "param"/>
        );
  }
  return (
    <div>
        <button onClick = {Aant}>rrrr</button>
      <An  name = "param"/>
    </div>
   );
}

export default Aant;