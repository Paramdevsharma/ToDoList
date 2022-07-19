import React ,{useState,useRef, Component} from 'react';
import logo from "./pic.jpg";
import An from './an';
import Aant from './aant';
import './App.css';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component{
  fun(){
    console.log(this.refs.kkdd.value);
    render(<An  name = {this.refs.kkdd.value}/>)
    const ff = () =>{

    }
  };
  render(){
    return (
    <div className = 'app'>
    <img src = {logo} alt = " "  className ="pic"></img>
    <h1 className = "txt">LOC ToDO App</h1>
    <div id="pgc" className ="container row mx-auto d-flex justify-content-center ">
      <input type = "text" id ="ppa" ref = "kkdd" className="form-control col-4"></input>
      <button onClick = {this.fun.bind(this) } className ="btn btn-primary " id = "jj">Add a Task</button>
    </div>
    </div>
   );
}
}

export default App;
