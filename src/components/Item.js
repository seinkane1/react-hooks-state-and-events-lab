import React, { useState } from 'react';

const Item = () => {
  const [isInCart, setIsInCart] = useState(false);

  const handleButtonClick = () => {
    setIsInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      
      <button onClick={handleButtonClick}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};
export default Item;
