import React from 'react';

const Button = ({ name, method }) => {
  return <button onClick={() => method(name)}>{name}</button>;
};

export default Button;
