import React from 'react';

const Button = ({ name, method }) => {
  console.log(name);
  return (
    <button className={`btn ${name}`} onClick={() => method(name)}>
      {name}
    </button>
  );
};

export default Button;
