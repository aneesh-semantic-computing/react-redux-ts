import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank );

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>deposit</button>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>
      <button onClick={() => bankruptMoney()} >bankrupt</button>
    </div>
  );
}

export default App;
