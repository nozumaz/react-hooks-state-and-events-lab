import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isTrue, setIstrue] = useState(true)

  function handleToggle (){
    setIstrue((isTrue)=> !isTrue)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  return (
    <div className={isTrue ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle} >{isTrue ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;