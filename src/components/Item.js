import React, {useState}from "react";

function Item({ name, category }) {
  const [Cart, addToCart] = useState(true)

 function handelClick(){
   addToCart((Cart)=> !Cart)
   }
  
  return (
    <li className={Cart ? "" : "in-cart" } >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handelClick} className="add">{Cart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;