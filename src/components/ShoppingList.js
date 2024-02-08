import React, { useState } from 'react';
import Item from './Item';
import ShoppingList from './ShoppingList.js'
import App from './App.js'

const categories = ['All', 'Electronics', 'Clothes', 'Toys']; // Define your item categories

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initial state: all items

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredItems.map((item) =>{} 
          
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
