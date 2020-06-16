import React from 'react';
import './index.css';

class Toggle extends React.Component {
  state = {
    isVisible: false,
  }

    render(){
      return  (
           <>
              <button 
              onClick={(e) => 
              this.setState({
                isVisible: !this.state.isVisible,
              })
              }
              >{this.state.isVisible ? "Hide": "Show"}</button>
              {this.state.isVisible ? this.props.children: null}
           </>)
    }
}

export default Toggle;

