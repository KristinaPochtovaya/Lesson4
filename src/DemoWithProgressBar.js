import React, { createRef } from 'react';
import './index.css';

var Nanobar = require('nanobar')

class ProgressBar extends React.Component {

  divRef = React.createRef();

  componentDidMount(){

    var options = {
      classname: 'my-class',
      id: 'my-id',
      target: document.getElementById('myDivId')
    };
    this.divRef =  new Nanobar( options );
    this.divRef.go( this.props.percentage );
    }
  
    componentDidUpdate(){
      this.divRef.go( this.props.percentage );
      }

  render() {
    return (
      <div ref={this.divRef} />
    )
  }
}

class DemoWithProgressBar extends React.Component {
  state = {
    percentage: 0
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage - 1 }))}>
          Dec
        </button>
        <ProgressBar percentage={this.state.percentage} />
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage + 1 }))}>
          Inc
        </button>
      </div >
    );
  }
}


export default DemoWithProgressBar;

