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
      {/* Item details (name, image, price, etc.) */}
      <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
// import React, { useState } from 'react';

// function Item({ item }) {
//   const [isInCart, setIsInCart] = useState(false); // Initial state: not in cart

//   const handleAddToCart = () => {
//     setIsInCart(!isInCart);
//     // Add other cart-related logic (e.g., updating cart state, storing in localStorage)
//   };

//   return (
//     <li className={isInCart ? 'in-cart' : ''}>
//       {item.name} - ${item.price}
//       <button onClick={handleAddToCart}>
//         {isInCart ? 'Remove From Cart' : 'Add to Cart'}
//       </button>
//     </li>
//   );
// }

// export default Item;