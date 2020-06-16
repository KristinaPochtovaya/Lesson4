import React from 'react';
import './index.css';

class NetworkIndicator extends React.Component {
  state = {
    isOnline: window.navigator.onLine,
  }

  onNetworkStatusChange = () => 
    this.setState({
      isOnline: window.navigator.onLine,
    })

    componentDidMount() {
      window.addEventListener("online", this.onNetworkStatusChange);
      window.addEventListener("offline", this.onNetworkStatusChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online",this.onNetworkStatusChange);
      window.removeEventListener("offline",this.onNetworkStatusChange);
    }

    render(){
      return this.state.isOnline? "Online": "Offline";
    }
}

export default NetworkIndicator;

