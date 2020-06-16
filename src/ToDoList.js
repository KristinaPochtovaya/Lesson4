import React from 'react';
import './index.css';

 class ToDoList extends React.Component {
  state ={items: [{id: 1, description: "123"}],
  isAddShown: false,
};

inputRef = React.createRef();


onKeyDown = (e) => {
  if(!this.state.isAddShown) {
    e.preventDefault();
  }
  if (e.key === "a") {
    this.setState({
      isAddShown: true,
    }) 
  } else if (e.key === "Escape") {
    this.setState({
      isAddShown: false,
      taskToAdd: "",
    })
  }
}

  componentDidMount(){
    // let timer =null;
    // let keys =[];    
    //   document.addEventListener("keydown", e =>
    // {   
    //   if(!timer) {
    //     keys.push(e.key)
    //     setTimeout(()=> {
    //       if(keys[0] === 's' && keys[1] === 'a') {
    //         this.setState({
    //           isAddShown: true,
    //         })
    //       }
    //       timer = null;
    //       keys =[];
    //     },1000);
    //   } else {

    //   }

    document.addEventListener("keydown", this.onKeyDown);
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    document.querySelector('input').focus();
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    document.removeEventListener("keydown",this.onKeyDown);
  }

  render (){
    return (
    <>
    {this.state.isAddShown ?
    <form onSubmit = {(e) => e.preventDefault()}>
      <input 
      ref ={(ref) => { 
        // ref && setTimeout(() => ref.focus(),0);
        ref && ref.focus();
      }}
      type="text"
      value={this.state.taskToAdd}
      onChange = {(e) => 
        this.setState({
          taskToAdd: e.target.value,
        })
      }
      />
      <button onClick={(e)=>{
      const items = [...this.state.items,{
        description: this.state.taskToAdd,
        id: Math.ceil(Math.random()*100), 
      }];
      this.setState({
        items,
        taskToAdd:"",
        isAddShown: false,
      })
    }
      }>Add </button>
    </form>
    : 
    <button onClick = {
      (e) => this.setState ({
        isAddShown: true,
      })
    }>Add task </button> }
    {this.state.items.map((item) => (
      <li key={item.id}>{item.description}</li>
    ))}
    </>
    )
  }
}


export default ToDoList;

// export default FallbackWrapper;
