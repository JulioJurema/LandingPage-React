import React from 'react';
import './App.css';

const Home = () => {
  return(
    <div>
      <h2>Eu sou a Home!</h2>
      <p>olá</p>
    </div>
  );
}

export default function App(){
  return(
    <div>
      <Home />
      <Home />
    </div>
  );
}