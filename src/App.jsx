import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(count - 1)
  }

  function incrementCount() {
    setCount(count + 1)
  }

  function multiplyCount() {
    setCount(count * 2)
  }

  function divisionCount() {
    setCount(count / 2)
  }

  return (
    <div className="title">
      <h1>Simple Counter Application</h1>
    <div className= "counter">
      <button onClick={divisionCount}>:</button>
      <br />
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <br />
    <button onClick={multiplyCount}>x</button>
    </div>
    </div>
  )
}

export default App
