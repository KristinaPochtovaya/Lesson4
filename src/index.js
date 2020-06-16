import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Albums from './Albums.js';
import FallbackWrapper from './FallbackWrapper.js';
import DemoWithProgressBar from './DemoWithProgressBar.js';




const App = () => (
  <>
  <DemoWithProgressBar/>
  <FallbackWrapper/> 
  <Albums />
  </>
)


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);


