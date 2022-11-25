import * as React from 'react';
import './style.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider /> 

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
