import React from 'react';
import './App.css';
import { Header } from './components/Header'
import Card from './components/Card';


function App() {
  return (
    <>
      <Header title = "React Estacionamento" />
    <div className="main-container">
    </div>
    <Card>
      <div className="identifier-container" ></div>
        <h2>AAC-45565</h2>
      <div className="vehiche-container" ></div>
        <span>Veículo</span>
        <h2>Corolla Branco</h2>
      <div className="times-container" ></div>
        <span>14/08 - 15:01</span>
        <span>--/-- - --:--</span>
    </Card>

    </>
  );
}

export default App;
