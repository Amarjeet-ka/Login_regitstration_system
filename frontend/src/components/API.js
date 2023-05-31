import React,{useState,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

 const API = ()=> {

   const [value,setValue] = useState();
   const navigate = useNavigate()

   const handleroomjoin = useCallback(() =>{
     navigate(`/room/${value}`)
   },[ navigate,value]);

  return (
    <div><input type='text'  value={value} onChange={e =>setValue(e.target.value)}  placeholder='Enter Room code'  /> 
        <button  onClick={handleroomjoin}>Join</button>
    </div>
     
  )
}
export default API;
