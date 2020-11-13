import React from "react";
// import {Route, Switch } from 'react-router-dom';
import PizzaForm from '../components/PizzaForm'


//Homepage
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PizzaForm />
    </>
  );
};
export default App;
