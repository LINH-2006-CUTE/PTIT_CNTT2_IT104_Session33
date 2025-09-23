import ShoppingForm from "./components/ShoppingForm";
import Cart from "./components/ProductCart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="container">
        <ShoppingForm/>
        <Cart />
      </div>
    </div>
  );
}

export default App;
//b1: xây dượng giao diện
// b2: setup redux
    //b2.1: tạo file reducer
    //b2.2: xây dựng state ( kiểu dữ liệu và giá trị khởi tạo
    //b2.3: xây dựng action + hàm reducer( kiểu dữ liệu + logic)
    //b2.4: xây dựng store
    //b2/5: bọc toàn bộ chương trình trong Provider
//b3: Lấy state ra để sử dụng (useSelector)
//b4: hiển thị dữ liệu theo state
