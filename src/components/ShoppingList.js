 import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'food' },
    { id: 2, name: 'Item 2', category: 'electronics' },
    { id: 3, name: 'Item 3', category: 'clothing' },
    
  ]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        
      </select>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;