import React, { useState } from "react";
import Item from "./Item";



function ShoppingList({ items }) {
  
  const  [filterBy, setFilterby] = useState("All");

  function handleFilterChange(event) {
    setFilterby (event.target.value); 
    console.log(filterBy)
  }
  const categoryToDisplay =items.filter((category) => {
    if (filterBy === "All") {
      return true;
    } else {
      return category.category === filterBy
    }
  })

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryToDisplay.map((items) =>  (
          <Item key={items.id} name={items.name} category={items.category} />

        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;