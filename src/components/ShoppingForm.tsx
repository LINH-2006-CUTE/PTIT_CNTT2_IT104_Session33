import { useSelector, useDispatch } from "react-redux";

export default function ProductList() {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const handleAdd = (products: any) => {
    dispatch({ type: "ADD_TO_CART", payload: products });
    dispatch({ type: "SET_MESSAGE", payload: "Add to cart successfully" });
    setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 1000);
  };

  return (
    <div className="products">
      <h2>List Products</h2>
      {products.map((p: any) => (
        <div className="product" key={p.id}>
          <img src={products.image} alt={products.name} width="100" height="70" />
          <div className="info">
            <strong>{products.name}</strong>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <button onClick={() => handleAdd(p)}>{products.price} USD</button>
        </div>
      ))}
    </div>
  );
}
