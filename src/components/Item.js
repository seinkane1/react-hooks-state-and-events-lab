import React, { useState } from 'react';

const Item = ({ item, initialInCart = false, onAddToCart, onRemoveFromCart }) => {
  const [isInCart, setIsInCart] = useState(initialInCart);

  const handleAddToCart = () => {
    setIsInCart(true);
    if (onAddToCart) {
      onAddToCart(item); 
    }
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    if (onRemoveFromCart) {
      onRemoveFromCart(item); 
    }
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      
      <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
