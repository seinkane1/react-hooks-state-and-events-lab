import React, { useState } from 'react';
import ShoppingList from '/.MyShoppingList';


const categories = ['All', 'Electronics', 'Clothes', 'Toys']; 

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All'); 
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
      <ul className="Items"/>
        {filteredItems.map((item) =>{} 
          
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
