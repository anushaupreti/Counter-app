import React, { useState } from 'react';
import Button from './Button';
import './style.css';

const Main = () => {
  const [count, setCount] = useState(0);

  const method = (name) => {
    if (name === 'increment') {
      setCount((prev) => prev + 1);
    } else if (name === 'decrement') {
      setCount((prev) => prev - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className='counter'>
      <h1>Counter APP</h1>
      <h3>{count}</h3>
      <div className='buttons'>
        <Button name='increment' method={method} />
        <Button name='decrement' method={method} />
        <Button name='reset' method={method} />
      </div>
    </div>
  );
};

export default Main;
