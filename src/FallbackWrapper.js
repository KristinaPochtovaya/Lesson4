import React from 'react';
import './index.css';

class Page1 extends React.Component {
  render(){
  return 'Page1'
}
}

class Page2 extends React.Component {
  render(){
  return undefined.call();
  // return 'Page2'
}
}

const Menu = ({ onChange }) => (
  <div>
    <button onClick={() => onChange("page1")}>Page 1</button>
    <button onClick={() => onChange("page2")}>Page 2</button>
  </div>
);

class ErrorBoundary extends React.Component {
  state ={
    isError: false,
    errorMessage: 'Something went wrong',
  }

  static getDerivedStateFromError (error){
    return {
      isError: true,
    }
  }

  componentDidCatch(error,info){
  }

  render(){
    if (this.state.isError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children
  }
}




class FallbackWrapper extends React.Component {
  state = {
    page: 'page1',
  }

  render() { 
    return (  
    <> 
    <Menu onChange ={(page) => this.setState({
      page
    })} /> 
    {this.state.page === 'page1'?
       <ErrorBoundary key="1"><Page1 /></ErrorBoundary>: 
       <ErrorBoundary key="2"><Page2 /></ErrorBoundary>
       }
    </>
    );
  }
}

export default FallbackWrapper;

