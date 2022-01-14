import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import "./styles/App.css";
import Header from "./Components/Header";
import Chart from "./Components/Chart";
import  SignIn  from "./Components/SignIn";
import  Login from "./Components/Login";
import  Dashboard from "./Components/dashboard";
import  Deposits from "./Components/Deposits";
import  Orders from "./Components/Orders";
import  Title from "./Components/Title";
import  listItems from "./Components/listItems";
import  button from "./Components/button";
import Axios from "axios";


ReactDOM.render(
  <React.StrictMode>
    <Chart/>
    <listItems/>
    <Dashboard/>
    <Deposits/>
    <Orders/>
    <Title/>
    <App/>



    

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 
