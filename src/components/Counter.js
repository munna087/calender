import React, { useState } from 'react';
 
const Counter = () => {
    const sayHello = () => console.log('Hello');
 
    return <Button handleClick={sayHello} />;
  };
   
  const Button = ({ handleClick }) => (
    <button type="button" onClick={handleClick}>
      Button
    </button>
  );
   
  Button.defaultProps = {
    handleClick: () => console.log('Default'),
  };
   
export default Counter;