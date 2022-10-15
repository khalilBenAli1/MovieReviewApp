import "./App.css";
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Grids from "./Components/Grid/Grids";
import axios from "axios"


function App() {
 const [data,setData]=useState([])

 useEffect(() => {
 axios.get("http://127.0.0.1:3001/movies")
 .then(function(response){
  setData(response.data)
 })
},[]);


  return (
    <div className="app">
      <Router>
      <Header/>      
        <Routes>
          <Route path="/" element={<Grids data={data}/>} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;