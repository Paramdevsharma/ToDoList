import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function An(props) {
    const shd = () =>{
        setstt(null);
    }
    const[sst, setstt] = useState(
    <div className = 'hhed'>
  <div class="card-body col-12">
  <h2>{props.name}</h2>
    <button type = 'button' onClick = {shd} className ="btn btn-primary">Delete</button>
</div>
   
    
</div>)

let d = 0;
  return (
   <div>
       {sst}
   </div>
   );
}

export default An;
