import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import { useState,useEffect } from 'react';


function App() {
  let [get,setGet]=useState(false)
  let [data,setdata]=useState('')
  let [pagenumber,setpagenumber] =useState(1)
useEffect(()=>{ const getdata=async ()=>{
  let data=await axios.get(`https://api.github.com/repositories/1296269/issues?page=${pagenumber}&per_page=5`)
  setdata(data.data)
  console.log(data.data)
}
getdata()
},[get])
  return (
    <div className="row justify-content-center">
      <h1 className='col-6 text-primary text-center'>pageno-{pagenumber}</h1>
      <div className='row'>

    {
     data&&data.map(entry=>{
      console.log(entry.user)
      return (<div className='d-flex flex-column flex-sm-row ms-4 mb-5align-items-center'>

      <img className='rounded-circle w-25 align-self-sm-center' src={entry.user.avatar_url}></img>
      <h1 className='text-info ms-md-4 align-self-sm-center'>{entry.user.login}</h1>
      <p></p>
     </div>)})
    
    }
      </div>
  
   <div className="d-flex justify-content-center">
   <button className='btn btn-secondary' onClick={()=>{setpagenumber(prev=>prev-1)
  setGet(prev=>!prev)}}>prev</button>
   <button className='btn btn-secondary ms-3' onClick={()=>{setpagenumber(prev=>prev+1)
  setGet(prev=>!prev)}}>next</button>
   </div>
    </div>
  );
}

export default App;
