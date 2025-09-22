import ShoppingForm from "./components/ShoppingForm";
import Cart from "./components/ProductCart";
// import Notification from "./components/Notification";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="container">
        <ShoppingForm/>
        <Cart />
      </div>
      {/* <Notification /> */}
    </div>
  );
}

export default App;
