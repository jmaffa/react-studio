import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import Cart from "./components/Cart";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div id="items-and-cart">
        <div id="item-container">
          {bakeryData.map((item, index) => ( 
            <BakeryItem index={index} item={item} name={item.name} description={item.description} price={item.price} image={item.image} addToCart={addToCart}/>
          ))}
        </div>

        <div id="cart-container">
          <Cart cartItems={cart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
