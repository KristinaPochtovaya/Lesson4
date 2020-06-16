import React from 'react';
import './index.css';

class Albums extends React.Component {
  state ={
    newArr:null,
  }



  async componentDidMount() {
    const response = await fetch('http://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();

    const responseUser = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await responseUser.json();
   
let newArr = [];

for(let i=0; i<albums.length; i++) {
    newArr.push({
   ...albums[i], 
   ...(users.find((itmInner) => itmInner.id === albums[i].userId))}
  );
}

    this.setState ({
        newArr,
    });

        }

  render (){
    if (this.state.newArr === null){
      return "...Loading..."
     } 
    return (
      <ul>
        {this.state.newArr.map((item)=>(
          <li key={Math.round(Math.random()*100000)}> 
          {item.name} -  
          {" "+ item.title}
        </li>
        ))} 

      </ul>
    )
  }
}

export default Albums;
