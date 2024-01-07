import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const showCartHandler = () => {
    setIsOpen(true)
  }
  const hideCartHandler = () => {
    setIsOpen(false)
  }
  return (
    <CartProvider>
      {isOpen && <Cart onHide={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
